######### Produce static files
FROM node:16.15.0 AS base
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm ci --silent --no-progress
COPY angular.json \
    tsconfig.json \
    tsconfig.app.json ./


######### Create container for lint
FROM base AS lint
# Copy source code
COPY ./src ./src
COPY .eslintrc.json \
    tsconfig.spec.json ./
COPY ./docker/lint-entrypoint.sh ./entrypoint.sh
ENTRYPOINT ["sh", "entrypoint.sh"]

######### Create container for end-to-end tests
FROM cypress/browsers:node16.14.0-chrome99-ff97 AS e2e-test
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci cypress
COPY cypress.json .
# COPY ./cypress ./cypress

FROM e2e-test as e2e-test-web
ENTRYPOINT ["/usr/local/bin/npm", "run", "test:e2e:ci:web"]

FROM e2e-test as e2e-test-station
ENTRYPOINT ["/usr/local/bin/npm", "run", "test:e2e:ci:station"]

FROM base AS base-test
COPY ./src ./src
COPY ./.storybook ./.storybook
COPY tsconfig.spec.json \
    jest.config.js \
    setup-jest.ts ./

######### Create container for unit tests
FROM base-test AS unit-test
ENTRYPOINT ["/usr/local/bin/npm", "run", "test:unit"]

######### Create container for Storybook stories (snapshot tests)
FROM base-test AS snapshot-test
ENTRYPOINT ["/usr/local/bin/npm", "run", "test:snapshot:ci"]

######### Create container for build
FROM base AS build
#Precompile modules with Angular Compatibility Compiler for faster builds
# RUN npx ngcc --properties es2015 browser module main --create-ivy-entry-points
COPY ./src ./src
# Compile application
RUN npm run ng build -- --output-path=dist

######### Use NGINX to serve static files and re-route requests
FROM openresty/openresty:1.19.9.1-2-buster AS final
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf.template
COPY ./docker/nginx-entrypoint.sh ./entrypoint.sh
ENTRYPOINT ["sh", "entrypoint.sh"]
CMD [ "nginx", "-g", "daemon off;" ]
EXPOSE 80

ARG BUILD_ID
# When built on Azure DevOps Server, build ID will inserted, otherwise,
# for example, in case of local container build `local` will be used.
# More information on using `ARG`s and `ENV`s:
# https://docs.docker.com/engine/reference/builder/#using-arg-variables
ENV BUILD_ID=${BUILD_ID:-'local'}

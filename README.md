# SvdTestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Hosted version

[Link](TODO) to hosted version.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run

### CLI

```npm start```

### Docker

```bash
docker build \
          --tag svd-final \
          --target final \
          .

docker run \
        --interactive \
        --name svd-final-container \
                svd-final

```

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

or

Run run in the docker container

```bash
docker build \
          --tag frontend-unit-test-image \
          --target unit-test \
          .

docker run \
        --interactive \
        --name frontend-unit-test-container \
                frontend-unit-test-image

```

### Single tes file run

`npm test -- shared/utilities/utilities.spec.ts --verbose`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

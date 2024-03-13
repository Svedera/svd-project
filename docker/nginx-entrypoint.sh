#!/usr/bin/env bash

# Exit when a command fails
set -o errexit
echo sveta
echo"$BASE_URL"
echo '${BASE_URL} \
    ${API_URL} \
    ${STORAGE_API_URL} \
    ${AUTH_URL}'

# Inject environment variables into NGINX configuration
# List all variables to be substituted to avoid clashing with
# NGINX own variables: https://serverfault.com/questions/577370
API_URL=${API_URL:-'http://backend:5000'} \
STORAGE_API_URL=${STORAGE_API_URL:-'http://storage/storage'} \
envsubst \
    '${BASE_URL} \
    ${API_URL} \
    ${STORAGE_API_URL} \
    ${AUTH_URL}' \
    < /etc/nginx/conf.d/default.conf.template \
    > /etc/nginx/conf.d/default.conf
cat /etc/nginx/conf.d/default.conf

# NOTE: In sed using `~` separator to avoid problems with forward slashes

# Set correct HTML base tage, so static resources are fetched
# from the right path instead of the `/` path.
# NOTE: Trailing and leading slashes in base href are important!
sed --in-place \
  's~<base href="/">~<base href="/'$BASE_URL'/">~' \
  /usr/share/nginx/html/index.html

# Fill configuration template with env variables
envsubst \
    < /usr/share/nginx/html/assets/app-config.template.js \
    > /usr/share/nginx/html/assets/app-config.js

# ------------ Display substitution result during container startup

cat /usr/share/nginx/html/index.html

exec "$@"

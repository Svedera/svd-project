#!/usr/bin/env bash

# Exit when a command fails
set -o errexit

############## run linter
exit_code=0
# if command exit code differs from 0, it will be piped to variable
npm run lint -- --format vso > lint-result.txt || exit_code=$?
printf '%b\n' "$(cat lint-result.txt)"

exit $exit_code

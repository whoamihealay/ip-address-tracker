#!/usr/bin/env sh

# abort on errors
set -e

# Remove old dist folder
rm -Rf dist

# build
npm run build

# navigate into the build output directory
cd dist


git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:whoamihealay/ip-address-tracker.git main:gh-pages

cd -
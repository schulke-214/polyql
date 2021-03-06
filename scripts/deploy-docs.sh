#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/book

git init
git add -A
git commit -m 'build: deploy docs'

git push -f git@github.com:schulke-214/polyql.git master:gh-pages

cd -

rm -rf ./docs/book

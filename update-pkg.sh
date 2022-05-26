#!/bin/bash

npm r $1
rm -rf ./node_modules/$1
npm i $1 --save

echo "$1 correctly updated"

echo "installed version is: "
cat ./node_modules/$1/package.json | grep version
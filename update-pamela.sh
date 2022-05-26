#!/bin/bash

npm r @revodigital/pamela
rm -rf ./node_modules/@revodigital/pamela
npm i @revodigital/pamela --save

echo "Pamela correctly updated"

./pmv.sh
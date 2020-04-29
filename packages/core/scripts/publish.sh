#!/usr/bin/env bash

cp package.json out

npm publish out --access=public

rm out/package.json

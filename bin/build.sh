#!/usr/bin/env bash

yarn ts-node index.ts

yarn quicktype out/items.json -o out/items.ts --just-types
yarn quicktype out/creatures.json -o out/creatures.ts --just-types
yarn quicktype out/nookMiles.json -o out/nookMiles.ts --just-types
yarn quicktype out/recipes.json -o out/recipes.ts --just-types

yarn prettier:fix
yarn prettier "out/*.json" --write

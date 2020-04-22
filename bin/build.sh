#!/usr/bin/env bash

yarn ts-node index.ts

yarn quicktype out/creatures.json -o out/creatures.d.ts --just-types
yarn quicktype out/items.json -o out/items.d.ts --just-types
yarn quicktype out/nookMiles.json -o out/nookMiles.d.ts --just-types
yarn quicktype out/recipes.json -o out/recipes.d.ts --just-types
yarn quicktype out/villagers.json -o out/villagers.d.ts --just-types
yarn quicktype out/construction.json -o out/construction.d.ts --just-types
yarn quicktype out/achievements.json -o out/achievements.d.ts --just-types

yarn prettier:fix
yarn prettier "out/*.json" --write

cp package.json out

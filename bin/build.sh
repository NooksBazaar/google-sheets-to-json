#!/usr/bin/env bash

yarn ts-node index.ts

yarn quicktype out/creatures.json -o out/creatures.ts --just-types
yarn quicktype out/items.json -o out/items.ts --just-types
yarn quicktype out/nookMiles.json -o out/nookMiles.ts --just-types
yarn quicktype out/recipes.json -o out/recipes.ts --just-types
yarn quicktype out/villagers.json -o out/villagers.ts --just-types
yarn quicktype out/construction.json -o out/construction.ts --just-types
yarn quicktype out/achievements.json -o out/achievements.ts --just-types

yarn prettier:fix
yarn prettier "out/*.json" --write

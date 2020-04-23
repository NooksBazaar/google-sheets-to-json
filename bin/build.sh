#!/usr/bin/env bash

yarn ts-node index.ts

yarn quicktype out/creatures.json -o out/creatures.d.ts --just-types -t Creatures
yarn quicktype out/items.json -o out/items.d.ts --just-types -t Items
yarn quicktype out/nookMiles.json -o out/nookMiles.d.ts --just-types -t NookMiles
yarn quicktype out/recipes.json -o out/recipes.d.ts --just-types -t Recipes
yarn quicktype out/villagers.json -o out/villagers.d.ts --just-types -t Villagers
yarn quicktype out/construction.json -o out/construction.d.ts --just-types -t Construction
yarn quicktype out/achievements.json -o out/achievements.d.ts --just-types -t Achievements

yarn prettier:fix
yarn prettier "out/*.json" --write

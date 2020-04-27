#!/usr/bin/env bash

yarn ts-node index.ts

yarn quicktype out/creatures.json -o out/creatures.ts --just-types -t Creatures
yarn quicktype out/items.json -o out/items.ts --just-types -t Items
yarn quicktype out/nookMiles.json -o out/nookMiles.ts --just-types -t NookMiles
yarn quicktype out/recipes.json -o out/recipes.ts --just-types -t Recipes
yarn quicktype out/villagers.json -o out/villagers.ts --just-types -t Villagers
yarn quicktype out/construction.json -o out/construction.ts --just-types -t Construction
yarn quicktype out/achievements.json -o out/achievements.ts --just-types -t Achievements
yarn quicktype out/reactions.json -o out/reactions.ts --just-types -t Reactions
yarn quicktype out/all.json -o out/all.ts --just-types -t Item

# Potential issue with files not being written before prettier can see them
sleep 5

yarn prettier:fix
yarn prettier "out/*.json" --write

yarn tsc -p tsconfig.types.json

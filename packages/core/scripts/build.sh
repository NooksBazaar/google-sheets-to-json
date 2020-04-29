#!/usr/bin/env bash

yarn ts-node src/index.ts

yarn quicktype dist/creatures.json -o dist/creatures.ts --just-types -t Creatures
yarn quicktype dist/items.json -o dist/items.ts --just-types -t Items
yarn quicktype dist/nookMiles.json -o dist/nookMiles.ts --just-types -t NookMiles
yarn quicktype dist/recipes.json -o dist/recipes.ts --just-types -t Recipes
yarn quicktype dist/villagers.json -o dist/villagers.ts --just-types -t Villagers
yarn quicktype dist/construction.json -o dist/construction.ts --just-types -t Construction
yarn quicktype dist/achievements.json -o dist/achievements.ts --just-types -t Achievements
yarn quicktype dist/reactions.json -o dist/reactions.ts --just-types -t Reactions
yarn quicktype dist/all.json -o dist/all.ts --just-types -t Item

# Potential issue with files not being written before prettier can see them
sleep 5

yarn prettier:fix
yarn prettier "dist/*.json" --write

yarn tsc -p tsconfig.types.json

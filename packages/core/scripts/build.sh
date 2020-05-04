#!/usr/bin/env bash

yarn ts-node src/index.ts

# Potential issue with files not being written before prettier can see them
sleep 5

yarn prettier:fix
yarn prettier "out/*.json" --write

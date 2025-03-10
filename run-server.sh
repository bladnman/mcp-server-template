#!/bin/bash

## Change to the script's directory
cd "$(dirname "$0")"

## .env FILE INCLUSION
## Export environment variables from .env file
while IFS= read -r line || [[ -n "$line" ]]; do
    # Skip empty lines and comments
    [[ -z "$line" || "$line" =~ ^# ]] && continue
    export "$line"
done < .env

## Trying to use a better node. Let's see if the
## environment supports nvm.
## Initialize nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

## Use the correct Node version
# nvm use v22.5.1 > /dev/null 2>&1 || nvm use default

# Suppress warnings on startup
export NODE_NO_WARNINGS=1

# Run the built server
node dist/index.js 
#!/bin/bash

##

reset

clear

##

set -e

set -x

##

npm install expo@latest --force

# npm install expo@50

## npx expo install --fix --force
npx expo install --fix -- --force
 

npx expo-doctor@latest

# https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
# https://expo.dev/changelog/2024/01-18-sdk-50

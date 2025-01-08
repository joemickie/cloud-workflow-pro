#!/bin/bash

# Install dependencies
npm install

# Compile TypeScript
npm run build

# Package for deployment
zip -r deploy.zip .

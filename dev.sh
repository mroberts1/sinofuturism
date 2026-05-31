#!/bin/bash
set -e

VAULT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
QUARTZ="$VAULT/.quartz"

if [ ! -d "$QUARTZ" ]; then
  echo "Cloning Quartz v4..."
  git clone --depth 1 --branch v4 https://github.com/jackyzha0/quartz.git "$QUARTZ"
  rm -f "$QUARTZ/.node-version"
fi

if [ ! -d "$QUARTZ/node_modules" ]; then
  echo "Installing dependencies..."
  npm install --prefix "$QUARTZ"
fi

cp "$VAULT/quartz.config.ts" "$QUARTZ/quartz.config.ts"
cp "$VAULT/quartz.layout.ts" "$QUARTZ/quartz.layout.ts"

cd "$QUARTZ"
npx quartz build --serve --directory "$VAULT/wiki" --wsPort 3002

#!/usr/bin/sh

cd frontend/
npm run build 
cp -r ./dist/* ../public
cd ..
npm run start-script

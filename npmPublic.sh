npm run build &&
  npm version patch &&
  rm -rf npmlib &&
  mkdir npmlib &&
  cp -r lib/ ./npmlib/lib &&
  cp -r dist ./npmlib/dist &&
  cp package.json ./npmlib/package.json &&
  cp README.md ./npmlib/README.md &&
  cd npmlib &&
  npm login &&
  npm publish &&
  cd ../

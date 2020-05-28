# @denkristoffer/eslint-config

ESLint configuration.

## Install

Install the package

```sh
yarn add -D eslint @denkristoffer/eslint-config
```

and add it to your `.eslintrc.js`.

### TypeScript projects

Make sure to set `parserOptions.tsconfigRootDir` as well for the rules requiring type information:

```js
module.exports = {
  extends: "@denkristoffer/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  root: true,
};
```

### JavaScript projects

For JavaScript projects you should extend `"@denkristoffer/eslint-config/js"` instead.

```js
module.exports = {
  extends: "@denkristoffer/eslint-config/js",
  root: true,
};
```

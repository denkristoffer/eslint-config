# @denkristoffer/eslint-config

ESLint configuration.

## Install

Install the package

```sh
yarn add -D eslint @denkristoffer/eslint-config
```

and add it to your `.eslintrc.js`. If it's a TypeScript project you should also extend `"plugin:@typescript-eslint/recommended-requiring-type-checking"`:

```js
module.exports = {
  extends: [
    "@denkristoffer/eslint-config",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  root: true,
};
```

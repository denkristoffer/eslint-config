const common = require("./common");

module.exports = {
  ...common,
  extends: [
    ...common.extends,
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};

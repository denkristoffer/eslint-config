const common = require("./common");

module.exports = {
  ...common,
  extends: [
    ...common.extends,
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    { files: ["**/*.ts"] },
    {
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variableLike",
            format: ["strictCamelCase", "strictPascalCase"],
          },
        ],
        "unicorn/no-null": "off",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              props: false,
              ref: false,
            },
          },
        ],
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};

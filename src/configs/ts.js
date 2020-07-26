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
          ...common.rules["@typescript-eslint/naming-convention"],
          {
            selector: "parameter",
            format: ["strictCamelCase", "StrictPascalCase"],
          },
        ],
        "unicorn/no-null": "off",
        "unicorn/prevent-abbreviations": [
          ...common.rules["unicorn/prevent-abbreviations"],
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

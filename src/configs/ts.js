const common = require("./common");

module.exports = {
  extends: [
    "@denkristoffer/eslint-config/src/configs/common",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    { files: ["**/*.ts"] },
    {
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          {
            selector: "parameter",
            format: ["strictCamelCase", "StrictPascalCase"],
          },
        ],
        "unicorn/no-null": "off",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              ...common.rules["unicorn/prevent-abbreviations"][1].replacements,
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

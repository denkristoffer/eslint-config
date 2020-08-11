const common = require("./common");

module.exports = {
  extends: [
    "eslint-config/src/configs/common",
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
            selector: "parameter",
            format: ["strictCamelCase", "StrictPascalCase"],
            leadingUnderscore: "allow",
          },
          ...common.rules["@typescript-eslint/naming-convention"].slice(1),
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

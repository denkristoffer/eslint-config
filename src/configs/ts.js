const common = require("./common");

module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@denkristoffer/eslint-config/src/configs/common",
  ],
  overrides: [
    { files: ["**/*.ts"] },
    {
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            ...common.rules["@typescript-eslint/naming-convention"].filter(
              (rule) => rule.selector === "property"
            )[0],
            filter: {
              regex: "^(__html)$",
              match: false,
            },
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

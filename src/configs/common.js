let jestVersion = 27;

try {
  jestVersion = require("jest/package.json").version;
} catch (e) {}

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  ignorePatterns: ["**/.eslintrc.js", "**/.eslintrc.mjs"],
  overrides: [
    { files: ["**/*.js", "**/*.mjs"] },
    {
      files: ["**/jest.config.js", "**/jest.config.mjs"],
      rules: {
        "unicorn/prevent-abbreviations": "error",
      },
    },
    {
      files: ["**/next.config.js", "**/next.config.mjs"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            allowList: {
              distDir: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/__tests__/**/*"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jest",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "unicorn",
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "class", format: ["StrictPascalCase"] },
      { selector: "default", format: ["strictCamelCase"] },
      {
        selector: "memberLike",
        format: ["strictCamelCase", "StrictPascalCase"],
      },
      {
        selector: "parameter",
        format: ["strictCamelCase", "StrictPascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["snake_case", "strictCamelCase", "StrictPascalCase"],
      },
      { selector: "typeLike", format: ["StrictPascalCase"] },
      {
        selector: "variableLike",
        format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-var": "error",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "unicorn/filename-case": ["error", { case: "camelCase" }],
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: false,
          lib: false,
        },
      },
    ],
  },
  settings: {
    jest: {
      version: jestVersion,
    },
    react: {
      version: "detect",
    },
  },
};

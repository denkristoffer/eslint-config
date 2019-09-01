module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/unicorn",
  ],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "no-null/no-null": "off",
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
    {
      files: ["**/jest.config.js"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          {
            whitelist: {
              setupFilesAfterEnv: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/next.config.js"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          {
            whitelist: {
              distDir: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "no-null",
    "prettier",
    "react",
    "react-hooks",
    "unicorn",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-null/no-null": "error",
    "no-var": "error",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "unicorn/filename-case": ["error", { case: "camelCase" }],
    "unicorn/prevent-abbreviations": [
      "error",
      { replacements: { args: false } },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

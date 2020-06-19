module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/unicorn",
  ],
  overrides: [
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
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
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
      { selector: "default", format: ["camelCase"] },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-var": "error",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "unicorn/filename-case": ["error", { case: "camelCase" }],
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
    react: {
      version: "detect",
    },
  },
};

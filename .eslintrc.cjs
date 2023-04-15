/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 */

/** @type {EsLintConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'warn',
    'import/no-extraneous-dependencies': 'warn',
  },
};

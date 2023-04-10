module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'no-console': 'warn',
    'no-unreachable': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-throw-literal': 'error',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
}

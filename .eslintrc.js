const path = require('path')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['prettier', 'import'],
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    '@launchpadlab/eslint-config/react',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, 'fe/babel.config.json'),
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: __dirname + '/fe/config/webpack.config.development.js',
      },
    },
  },
  rules: {
    'no-warning-comments': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}

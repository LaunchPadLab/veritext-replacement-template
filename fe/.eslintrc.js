const path = require('path')

module.exports = {
  root: true,
  extends: ['@launchpadlab/eslint-config/react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, 'babel.config.json'),
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: __dirname + '/config/webpack.config.development.js',
      },
    },
  },
}

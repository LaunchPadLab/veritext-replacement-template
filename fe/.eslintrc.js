module.exports = {
  'extends': ['@launchpadlab/eslint-config/react-rails'],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': __dirname + '/config/webpack.config.development.js',
      }
    }
  }
}

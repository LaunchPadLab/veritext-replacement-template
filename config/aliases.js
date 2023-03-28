// Webpack aliases

const path = require('path')

function aliases (basePath) {
  const to = relPath => path.join(basePath, relPath)
  return {
    // Local
    'api-actions': to('js/main/apiActions'),
    'components': to('js/components'),
    'config': to('js/config'),
    'images': to('images'),
    'store': to('js/main/store'),
    'types': to('js/main/types'),
    'utils': to('js/utils'),
    // Services
    'api': to('js/services/api'),
    'auth': to('js/services/auth'),
    'browser-history': to('js/services/browserHistory'),
    'local-storage': to('js/services/localStorage'),
    'sentry': to('js/services/sentry'),
    // Modules
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-redux-utils': '@launchpadlab/lp-redux-utils',
  }
}

module.exports = aliases
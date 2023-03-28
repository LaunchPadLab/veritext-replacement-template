import { init, getCurrentHub } from '@sentry/browser'
import { isProduction } from 'config'
const { NODE_ENV, REACT_APP_SENTRY_ENV, REACT_APP_SENTRY_URL } = process.env

/* eslint-disable no-console */

function initialize() {
  // Skip initializing if already Sentry is already setup or if Cypress is running
  // Sentry can interfere with XHR intercepts and Cypress runs with NODE_ENV=development and NODE_ENV=production
  if (isSetup() || window.Cypress) return

  // Sentry doesn't provide value in lower environments and can have unintended conflicts with dev dependencies
  if (!isProduction() && REACT_APP_SENTRY_URL)
    return console.error(
      'ERROR: Sentry is configured for a local development environment. This is unnecessary and should be disabled by removing the "REACT_APP_SENTRY_URL" environment variable from these environments.'
    )
  if (isProduction() && !REACT_APP_SENTRY_URL)
    return console.error(
      'ERROR: Sentry is not configured. A "REACT_APP_SENTRY_URL" environment variable must be defined.'
    )

  try {
    init({
      dsn: REACT_APP_SENTRY_URL,
      environment: REACT_APP_SENTRY_ENV || NODE_ENV,
    })
  } catch (e) {
    console.warn(`WARNING: Sentry intialization failed: ${e}`)
  }
}

// Sentry will be initialized with a hub and a client with a blank scope
function isSetup() {
  return !!getCurrentHub().getClient()
}

// Initialize on import
initialize()

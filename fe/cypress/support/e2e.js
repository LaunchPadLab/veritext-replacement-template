// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your other test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/guides/configuration#section-global
// ***********************************************************

import './commands'

/**
 * Force XHR polyfill to allow Cypress to incercept routes using cy.route()
 * https://github.com/cypress-io/cypress/issues/95
 * https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting
 */
Cypress.on('window:before:load', (win) => {
  win.fetch = null
})

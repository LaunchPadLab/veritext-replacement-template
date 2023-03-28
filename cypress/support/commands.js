// ***********************************************
// This example commands.js shows you how to
// create the custom command: 'login'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/api/commands
// ***********************************************
//

Cypress.Commands.add('login', (email, password) => {
  let userEmail, userPassword

  cy.fixture('user').then(data => {
    userPassword = password || data.password
    userEmail = email || data.email

    var log = Cypress.log({
      name: 'login',
      message: [ email, password ],
      consoleProps: () => {
        return {
          email: email,
          password: userPassword
        }
      }
    })

    cy
      .visit('sign-in', { log: false })
      .get('input[name$=email]').type(userEmail, { delay: 0, log: false })
      .get('input[name$=password]').type(`${userPassword}{enter}`, { delay: 0, log: false })
      .then(() => { log.snapshot().end() })
  })
})

Cypress.Commands.add('logout', () => {
  const log = Cypress.log({
    name: 'logout',
  })

  cy
    .visit('/')
    .get('*[data-cy="logout-link"]').click({ force: true })
    .then(() => { log.snapshot().end() })
})

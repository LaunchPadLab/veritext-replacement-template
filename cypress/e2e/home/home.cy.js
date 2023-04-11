const URL = '/'

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  it('renders a main section that successfully interacts with the API', () => {
    cy.get('.backend-healthy main').should('exist')
  })
})

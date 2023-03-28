const URL = '/'

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(URL)
  })
  it('renders a main section', () => {
    cy.get('main').should('exist')
  })
})

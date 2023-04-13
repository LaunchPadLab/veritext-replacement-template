const URL = 'api/v1/files'

describe('File Endpoints', () => {
  it('should get all files', () => {
    cy.request('GET', URL).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
    })
  })

  it('should get a file by id', () => {
    cy.request('GET', `${URL}/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('object')
    })
  })
})

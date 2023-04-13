const URL = 'api/v1/folders'

describe('Folder Endpoints', () => {
  // #getFolders
  it('should get all folders', () => {
    cy.request('GET', URL).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
    })
  })

  //   #getFolderById
  it('should get a folder by id', () => {
    cy.request('GET', `${URL}/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('object')
    })
  })
})

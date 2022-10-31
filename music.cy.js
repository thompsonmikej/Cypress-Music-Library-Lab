describe('User story #1. For Add Song, clicks submit button', () => {
  it('clicks the Add Song button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button')
    cy.get('[data-cy="submit"]').contains('Add').click()
    cy.should('be.visible')
  })
})

describe('User story #2. This filter will display the song that you added', () => {
  it('displays the ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('row').find('Edit Song').last()
    cy.get('[data-cy="submit"]')
    cy.should('be.visible')
  })
})
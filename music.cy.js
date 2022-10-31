describe('User story #1. Add a song into the DB as an end user would', () => {
  it('types in song data and clicks the Add Song button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.formDiv > form > [name="title"]').type('Gangstas Paradise').not('Gangsters Paradise')
    cy.get('.formDiv > form > [name="artist"]').type('Coolio').not('Cool Leo')
    cy.get('.formDiv > form > [name="album"]').type('Coolio')
    cy.get('.formDiv > form > [name="genre"]').type('rap').not('R and B')
    cy.get('[data-test="release_date"]').type('2022-10-31')
    cy.should('be.visible')
    cy.get('[data-testid="submit btn"]').click()
  })
})


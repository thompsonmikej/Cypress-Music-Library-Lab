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


describe('User story #2. Search/filter function to display the added record', () => {
  it('Navigates search results in the table and asserts that the record/data exists', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1499) // Hint: You may need to add the.wait(nnn) command to create a delay.
    cy.get(':nth-child(4) > input').type('Gangstas Paradise').not('Gangsters Paradise') // Navigate the search results in the table
    cy.get('.formDiv > form > [name="title"]').not('null')
    cy.get('.formDiv > form > [name="title"]').not('to.be.undefined')
    cy.should('exist') // Assert that the record / data exists.
    cy.should('be.visible')
  })
})


describe('User story #3. Delete the record that I just added', () => {
  it('Find duplicate elements of my table to find the correct row and then trigger the “delete” button', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1499) // Hint: You may need to add the.wait(nnn) command to create a delay.
    cy.get('tbody').filter(':contains("Gangstas Paradise")')
    cy.get('[data-cy="submit"]').last().click('bottomRight', { multiple: true })
    cy.end()
  })
})
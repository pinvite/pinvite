/// <reference types="cypress" />

describe('The terms and condition page', function() {
  it('should load', function(){
    if (Cypress.env('TEST_HOST') === undefined) {
      cy.visit('http://localhost:8000/how_to_use')
    } else {
      cy.visit(Cypress.env('TEST_HOST') + '/how_to_use' )
    }

    cy.get('[data-cy=app-bar]')
  })
})

/// <reference types="cypress" />

describe('The terms and condition page', function() {
  it('should load', function(){
    if (Cypress.env('TEST_HOST') === undefined) {
      cy.visit('http://localhost:8000/terms_and_conditions')
    } else {
      cy.visit(Cypress.env('TEST_HOST') + '/terms_and_conditions' )
    }

    cy.get('[data-cy=app-bar]')
  })
})

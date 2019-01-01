/// <reference types="cypress" />

describe('The main page', function() {
  describe('When not logged in', () => {
    describe('The primary button(s)', () => {
      it('should show the text to encourage logging-in', () => {
        if (process.env.TEST_HOST === undefined) {
          cy.visit('http://localhost:8000')
        } else {
          cy.visit(process.env.TEST_HOST)
        }
    
        cy.get('[data-cy=primary-button]')
          .should('contain', 'Twitterで登録')
        })
    })
  })  
})

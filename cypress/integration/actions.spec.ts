/// <reference types="cypress" />

import {login} from "../support/login"

describe('The main page', function() {
  beforeEach(function() {
    if (Cypress.env('TEST_HOST') === undefined) {
      cy.visit('http://localhost:8000')
    } else {
      cy.visit(Cypress.env('TEST_HOST'))
    }
  })

  describe('When NOT logged in', function() {
    describe('The primary button(s)', function() {
      it('should show the text to encourage logging-in', function() {
        cy.get('[data-cy=primary-button]')
          .should('contain', 'Twitterで登録')
      })
    })
  })

  describe('When logged in', function() {
    before(function(){
      login()
    })

    describe('The primary button(s)', function() {
      it('should show the text to move to the entry page', function() {
        cy.get('[data-cy=primary-button]')
          .should('contain', '募集内容を入力')
        })
    })

    describe('The App Bar', function() {
      it('should show the profile picture', function() {
        cy.get('[data-cy=profile-picture]')
      })
    })
  })  
})

//Cypress with javascript and mocha framework script

//For cypress to recommened keywords that can use after typing cy.
/// <reference types="Cypress" />

describe('Test suite', function() {

    it('Test case 1', function() {

      //Go to a webpage
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      //Get locator
      cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')
      cy.wait(5)
      cy.get('.product:visible').should('have.length', 4)

      //To click
      //cy.contains('type').click()
    })
})
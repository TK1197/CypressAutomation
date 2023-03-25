//Cypress with javascript and mocha framework script
//For cypress to recommened keywords that can use after typing cy.
/// <reference types="Cypress" />

describe('Test suite', function() {

    it('Test case 1', function() {

      //Go to a webpage
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      //compare value (assertion)
      cy.get('.brand').should('have.text', 'GREENKART')

      //getting log and logs print in browser console within cypress
      cy.get('.brand').then(function(logoelement) {
      
        cy.log(logoelement.text())
      })

      //Get locator
      cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')
      cy.wait(5)

      //parent child changing to get product inside the table and click
      //reusing object with 'as' keywords
      cy.get('.products').as('productlocator')
      cy.get('@productlocator').find('.product').should('have.length', 4)
      cy.wait(5)

      //clicking on a object where has multiple same name object 
      //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

      //Getting the text to validate
      cy.get('@productlocator').find('.product').each(($e1, index, $list) => {

        const vegetables = $e1.find('h4.product-name').text()

        if(vegetables.includes('Cashews')){

            cy.wrap($e1).find('button').click()
        }
      })

      //click on cart icon
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.get('.product-name').should('have.text', 'Cashews - 1 Kg')
      cy.contains('Place Order').click()

      //dropdown
      cy.get('select').select('Malaysia').should('have.value', 'Malaysia')

      //checkbox
      cy.get('input[type="checkbox"]').check().should('be.checked')
      cy.contains('Proceed').click()
      
    })
})
///<reference types="Cypress" />

describe('Shopping test case', function() {

    before(function() {

        cy.fixture('shop_product').then(function(data){

            this.data = data
        })
    })

    it('Second test case', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()

         //custom keyword commands added to support/commands folder
         //loop with javascript on json product array data
         this.data.products.forEach(function (element) {

            cy.selectProduct(element)
        })
        cy.get('.nav-link.btn.btn-primary').click()
    })
})
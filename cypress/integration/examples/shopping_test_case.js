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
        cy.get('button[class="btn btn-success"]').click()
        cy.get('input[id="country"]').type('Malaysia')
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[value="Purchase"]').click()

        //get alret message and verify the text is present 
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})
///<reference types="Cypress" />

describe('Testing with Mocha Framework', function() {

    before(function() {
       
        cy.fixture('signup_data').then(function(data){

            this.data = data
        })
    })

    it('First test case', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name)
        //verify entered data below
        cy.get(':nth-child(4) > .ng-valid').should('have.value', this.data.name)
        cy.get("div[class='form-group'] input[name='email']").type(this.data.email)
        cy.get("div[class='form-group'] input[type='password']").type(this.data.password)
        cy.get("input[id='exampleCheck1']").check().should('be.checked')
        cy.get('select').select(this.data.gender)
        cy.get('#inlineRadio2').click()
        cy.get('div[class="form-group"] input[name="bday"]').type(this.data.date)
        cy.get('input[value="Submit"]').click()
        cy.get('.alert')
    })
})
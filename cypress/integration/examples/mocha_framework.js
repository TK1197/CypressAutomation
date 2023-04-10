///<reference types="Cypress" />
import signup_objects from '../Objects/signup_objects'

describe('Testing with Mocha Framework', function() {

    before(function() {
       
        cy.fixture('signup_data').then(function(data){

            this.data = data
        })
    })

    it('First test case', function() {

        const singupobjects = new signup_objects()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        singupobjects.setTextName().type(this.data.name)
        //verify entered data below
        singupobjects.verifysetTextName().should('have.value', this.data.name)
        singupobjects.setTextEmail().type(this.data.email)
        singupobjects.setTextPassword().type(this.data.password)
        singupobjects.clickCheckBox().check().should('be.checked')
        singupobjects.selectGender().select(this.data.gender)
        singupobjects.selectEmplomentStatus().click()
        singupobjects.setTextBirthday().type(this.data.date)
        singupobjects.clickSubmitbtn().click()
        cy.get('.alert')
    })
})
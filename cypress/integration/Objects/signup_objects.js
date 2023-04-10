class signup_objects{

    setTextName(){

        return cy.get("div[class='form-group'] input[name='name']")
    }

    verifysetTextName(){

        return cy.get(':nth-child(4) > .ng-valid')
    }

    setTextEmail(){

        return cy.get("div[class='form-group'] input[name='email']")
    }

    setTextPassword(){

        return cy.get("div[class='form-group'] input[type='password']")
    }

    clickCheckBox(){

        return cy.get("input[id='exampleCheck1']")
    }

    selectGender(){

        return cy.get('select')
    }

    selectEmplomentStatus(){

        return cy.get('#inlineRadio2')
    }

    setTextBirthday(){

        return cy.get('div[class="form-group"] input[name="bday"]')
    }

    clickSubmitbtn(){

        return cy.get('input[value="Submit"]')
    }
}

export default signup_objects;


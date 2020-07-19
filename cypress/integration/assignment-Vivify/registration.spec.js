/*to be able to run tests, 
I registered through cypress and made this test, regardless it's excluded from assignment*/

describe('Positive registration testing ', () => {

        it('Registeration', () => {

            cy.visit('https://gallery-app.vivifyideas.com/')
            cy.get('a[href="/register"]')
                .click()
    
            cy.get('#first-name')
                .type('Maja')
    
            cy.get('#last-name')
                .type('Milovanovic')
    
            cy.get('#email')
                .type('mtubic3@gmail.com')
    
            cy.get('#password')
                .type('a52i6dC27YWfjZ5')
    
            cy.get('#password-confirmation')
                .type('a52i6dC27YWfjZ5')
    
            cy.get('input[type="checkbox"]')
                .click()
            cy.get('button[type="submit"]')
                .click()
    
        })

})

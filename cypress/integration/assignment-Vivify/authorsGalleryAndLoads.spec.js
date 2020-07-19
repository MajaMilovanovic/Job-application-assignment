describe('Authors galleries testing and load button', () => {

    beforeEach(() => {

        cy.signIn('mtubic3@gmail.com', 'a52i6dC27YWfjZ5')
    })

    it('Authors galleries ', () => {

        cy.get('body').then(($body) => {
            
            if ($body.text().includes('Jelena Krstic')) {
               
                cy.contains("Jelena Krstic")
                    .click()
            } else {
             
                cy.get(':nth-child(3) > :nth-child(2) > .btn')
                    .click()
            }

        })

        cy.contains("Jelena Krstic")
            .click()

        cy.get('.title-style')
            .should('have.text', 'Galleries of Jelena  Krstic')

        cy.get('.grid')
            .children()
            .its('length')
            .should('not.be.greaterThan', 10)

        cy.get('body').then((body) => {

            if (body.find(':nth-child(3) > :nth-child(2) > .btn').length > 0) {

                body.find(':nth-child(3) > :nth-child(2) > .btn').click()

            } else {

                cy.get(':nth-child(3) > :nth-child(2) > .btn')
                    .should('not.be.visible')
            }

        })

    })

})
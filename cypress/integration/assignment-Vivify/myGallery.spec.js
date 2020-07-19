describe('CMy gallery testing', () => {

    beforeEach(() => {

        cy.signIn('mtubic3@gmail.com', 'a52i6dC27YWfjZ5')
    })

    it('Creating gallery - photo upload test', () => {

        cy.contains("Create Gallery")
            .click()

        cy.get('#title')
            .type('HP Logo')

        cy.get('#description')
            .type('Hogwarts emblem')

        cy.get('input[type="url"]')
            .type('https://images-na.ssl-images-amazon.com/images/I/81FKnqZoV0L._AC_SY355_.jpg')

        cy.contains('Submit')
            .click()

        cy.url().should('be', 'https://gallery-app.vivifyideas.com/')

        cy.get('.grid')
            .contains('HP Logo')

    })

    it('Creating gallery - photo delete test', () => {

        cy.contains("Create Gallery")
            .click()

        cy.get('#title')
            .type('HP Logo1')

        cy.get('#description')
            .type('Hogwarts emblem1')

        cy.get('input[type="url"]')
            .type('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.impericon.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fe%2Fmet00019_lg.jpg&imgrefurl=https%3A%2F%2Fwww.impericon.com%2Fen%2Fharry-potter-hogwarts-crest-metallic-poster.html&tbnid=MkC87JI8nLiBKM&vet=12ahUKEwjSltfo5dbqAhWED-wKHQO7A-QQMygAegUIARDJAQ..i&docid=lkv3YJCspPdUcM&w=523&h=756&q=harry%20potter%20logo&hl=en&ved=2ahUKEwjSltfo5dbqAhWED-wKHQO7A-QQMygAegUIARDJAQ')

   //     cy.get('.alert alert-danger')
     //       .should('have.text', 'Wrong format of image')

        cy.contains('Add image')
            .click()

        cy.get(':nth-child(3) > .input-group > .form-control')
            .type('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.frog.ink%2FSaC3lrtj%2Fhpfnssp001_600.jpg%3Fv%3D1520802486.217&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fitm%2FHarry-Potter-Hogwarts-School-Crest-Logo-Large-Enamel-Metal-Pin-NEW-UNUSED-%2F382287405859&tbnid=EMawA1xnxIM5IM&vet=12ahUKEwjSltfo5dbqAhWED-wKHQO7A-QQMygIegUIARDgAQ..i&docid=f-JZIT0Ut9ytCM&w=502&h=600&q=harry%20potter%20logo&hl=en&ved=2ahUKEwjSltfo5dbqAhWED-wKHQO7A-QQMygIegUIARDgAQ')

       
        cy.get(':nth-child(3) > .input-group > .input-group-append > :nth-child(1)').click()
        
        cy.get('form > :nth-child(4)').click()
        cy.contains('Submit')
            .click()

        //while app was working, test passed, in the meantime it started to fail
        //because submit button stopped working
        //I couldn't test any functionalities in my gallerie, or in my photos
        cy.screenshot()
        cy.get('a[href="/my-gallery"]').click()

        cy.get('.grid')
            .contains('Maja Milovanovic')
            .its('length').should('be', 2)
    })
})
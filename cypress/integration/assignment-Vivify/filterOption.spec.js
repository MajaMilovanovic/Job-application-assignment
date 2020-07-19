describe('Gallery functionality testing - search', () => {

    beforeEach(() => {

        cy.signIn('mtubic3@gmail.com', 'a52i6dC27YWfjZ5')
    })

    it('Search input testing - Authors last name', () => {

        cy.get('input[type="text"]')
            .as('searchInput')

        cy.get('@searchInput')
            .type("repic")
            .should('have.value', 'repic')

        cy.get('.input-group-append > .btn')
            .as('filterBtn')

        cy.get('@filterBtn')
            .click()

        cy.get('.grid')
            .contains('Repic')

    })

    it('Search input testing - upload year', () => {

        cy.get('input[type="text"]')
            .type("2020")
            .should('have.value', '2020')

        cy.get('.input-group-append > .btn')
            .click()

        cy.get('h4')
            .contains('No galleries found')

    })

    it('Search input testing - partial word for filter', () => {

        cy.get('input[type="text"]')
            .as('searchInput')

        cy.get('@searchInput')
            .type("rep")
            .should('have.value', 'rep')

        cy.get('.input-group-append > .btn')
            .as('filterBtn')

        cy.get('@filterBtn')
            .click()

        cy.get('.grid')
            .contains('Rep')

    })

    it('Search input testing - Special character', () => {

        cy.get('input[type="text"]')
            .as('searchInput')

        cy.get('@searchInput')
            .type('$')
            .should('have.value', '$')

        cy.get('.input-group-append > .btn')
            .as('filterBtn')

        cy.get('@filterBtn')
            .click()

        cy.get('h4')
            .contains('No galleries found')

    })

    //test has passed, I left that assertation at the end because 
    //app was broken when I performed test, so I don't know what was true result
    //is result just emtpy gallerie, or just regular gallery with all photos 
    it('Search input testing - empty field', () => {

        cy.get('input[type="text"]')
            .as('searchInput')

        cy.get('@searchInput')
            .type('maja')
            .clear()
            .should('have.value', '')

        cy.get('.input-group-append > .btn')
            .as('filterBtn')

        cy.get('@filterBtn')
            .click()

        cy.get('.title-style')
            .should('contain', 'All Galleries')
        cy.screenshot()

    })
})
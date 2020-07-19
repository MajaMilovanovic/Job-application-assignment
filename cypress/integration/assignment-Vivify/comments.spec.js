
//

describe('Gallery functionality testing - comments', function () {

    it('Comments adding test', () => {

        cy.signIn('mtubic3@gmail.com', 'a52i6dC27YWfjZ5')

        //here I tried to go through for loop, as idea was that the loop would click on Load more button until 
        //"River" is visible in dom tree
        //it didn't work out :)
        /*     cy.get('.grid').then((grid) => {
                 for (let n = 0; n < length.children; n++) {
     
                     if (grid.find('.grid').children().length > 0) {
                         cy.get('.box-title').contains("River").click()
                     } else {
                         cy.get(':nth-child(3) > :nth-child(2) > .btn').click()
                     }
                 }
             })*/

        //here it clicks just one more time, so test sometime pass and sometimes not
        cy.get('body').then(($body) => {

            if ($body.text().includes('HP')) {
                cy.get('.box-title').contains("HP")
                    .click()
            } else {
                cy.get(':nth-child(3) > :nth-child(2) > .btn')
                    .click()
            }

        })

        cy.get('.box-title')
            .contains('HP')
            .click()

        cy.get('textarea')
            .type('River pic')

        cy.get('form > .btn').click()

        cy.get('.list-group-item')
            .should('contain', 'River pic')

        cy.get('textarea')
            .type('dfasafdasf pictu')

        cy.get('form > .btn').click()


    })

    it('Delete comments test', () => {
        cy.get('body')
            .contains('dfasafdasf pictu')
            .siblings('div')
            .find('button')
            .click()

        cy.get('body')
            .should('not.contain.text', 'dfasafdasf pictu')

    })

    //in the next commented lines I tried to test confirm window, but cypress did not recognized it
    //with clicking on delete button, the comment was deleted, without confirm window appearing, unlike in app itself

    /*if I wanted to click cancel ->
    cy.on('window:confirm', fuction(confirmText) {
        return false
    })*/

    //if I wanted to click ok
    // cy.contains('Are you sure you want to delete comment?').click()*/

})
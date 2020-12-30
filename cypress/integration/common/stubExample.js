describe('stub testsuite', () => {
    it('stub testcase', () => {
        
        let msg = 'There are no comments to display'
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route(
            {
                method: 'PUT',
                url: 'comments/*',
                status: 404,
                response: {
                    error: msg

                },
                delay: 3000
        }).as('putComment')

        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain', msg)
        cy.pause()

    })//it



})//describe
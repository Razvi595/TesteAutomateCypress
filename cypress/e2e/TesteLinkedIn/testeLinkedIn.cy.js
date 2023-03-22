describe('On LinkedIn', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('razvanandrei595@yahoo.com');
        cy.get('#password').type('Razvanel00.');
        cy.get('.btn__primary--large').click();
        cy.get('#ember17').should('exist');
    })

})

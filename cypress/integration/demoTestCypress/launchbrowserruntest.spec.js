
describe('Login Test', () => {
    it('User use incorrect login creds and gets an error message', ()=> {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('[name="username"]').type('jsadjadg');
        cy.get('[name="password"]').type('ajdasjdhkahd');
        cy.get('[value="Log In"]').click();
        cy.get('.error').should('has.text', 'The username and password could not be verified.');
    })
})
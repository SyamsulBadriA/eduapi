describe('Basic Auth', () => {
    it('should login successfully by appending username and password in URL', () => {
        cy.loginViaURL(); 
    });

    it('should login successfully using headers', () => {
        cy.loginViaHeaders(); 
    });
});
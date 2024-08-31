/// <reference types="cypress" />

describe('Basic Auth', () => {
    it('Successfully Login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
            failOnStatusCode: false
        }).then(() => {
            cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
        });
    });

    it('Successfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        }).then(() => {
            cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
        });
    });
});

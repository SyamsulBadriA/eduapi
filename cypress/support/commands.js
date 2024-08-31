Cypress.Commands.add('loginViaURL', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
        failOnStatusCode: false
    }).then(() => {
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
    });
});

Cypress.Commands.add('loginViaHeaders', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4='
        },
        failOnStatusCode: false
    }).then(() => {
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
    });
});

/// <reference types="cypress" />

describe('Successfully Delete a user', () => {
    it('should delete the user successfully', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(204);

            expect(response.body).to.be.empty;

            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/2',
                failOnStatusCode: false 
            }).then((getResponse) => {
                expect(getResponse.status).to.equal(200);
            });
        });
    });
});

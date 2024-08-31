/// <reference types="cypress" />

describe('Successfully Edit a user', () => {
    it('should edit the user successfully', () => {
        const updatedUser = {
            "name": "Syamsul Badri",
            "job": "Test Engineer"
        }

        cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('name', 'Syamsul Badri');
            expect(response.body).to.have.property('job', 'Test Engineer');
            expect(response.body.job).to.equal('Test Engineer');
        });
    });
});

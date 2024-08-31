/// <reference types="cypress" />

describe('Successfully create new users', () => {
    it('should create a new user and return status 201', () => {
        const user = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'leader');
            expect(response.body.name).to.equal('morpheus');
            expect(response.body.job).to.equal('leader');
        });
    });
});

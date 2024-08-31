
/// <reference types="cypress" />

describe('GET List User', () => {
    it('Verify the list users will displayed', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
    });
  });
  
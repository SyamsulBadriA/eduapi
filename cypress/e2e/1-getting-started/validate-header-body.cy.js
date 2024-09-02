/// <reference types="cypress" />

describe('Validate Body', () => {
    it('Successfully validates body content', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
      cy.get('@pokemon')
        .its('body')
        .should((body) => {
          expect(body).to.have.property('name', 'ditto'); 
          expect(body).to.have.property('id', 132); 
          expect(body).to.have.property('base_experience', 101);
          expect(body.abilities[0].ability).to.have.property('name', 'limber');
        });
    });
  });
  
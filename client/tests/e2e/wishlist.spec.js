/// <reference types="Cypress" />

describe('Wishlist', () => {
  afterEach(() => {
    cy.request('DELETE', '/api/wishlist/604632fb4a84fec80228cd50');
  });

  it('creates a new wishlist for a customer', () => {
    const requestBody = { productId: '604f8a43189503f627a0bd77' };
    cy.request('POST', '/api/wishlist/604632fb4a84fec80228cd50', requestBody);
    cy.request('/api/wishlist/604632fb4a84fec80228cd50')
      .its('body')
      .should('have.property', 'products');
  });
  it('add an additional product to the wishlist', () => {
    const favoriteProductOne = { productId: '604f8a9f189503f627a0bd78' };
    const favoriteProductTwo = { productId: '604f8a43189503f627a0bd77' };
    cy.request(
      'POST',
      '/api/wishlist/604632fb4a84fec80228cd50',
      favoriteProductOne
    );
    cy.request(
      'POST',
      '/api/wishlist/604632fb4a84fec80228cd50',
      favoriteProductTwo
    );
    cy.request('/api/wishlist/604632fb4a84fec80228cd50')
      .its('body')
      .should('have.property', 'products')
      .should('have.length', 2);
  });

  it.only('should remove a favorite item from wishlist if users tries to add it a second time', () => {
    const favoriteProductOne = { productId: '604f8a9f189503f627a0bd78' };
    cy.request(
      'POST',
      '/api/wishlist/604632fb4a84fec80228cd50',
      favoriteProductOne
    );
    cy.request('/api/wishlist/604632fb4a84fec80228cd50')
      .its('body')
      .should('have.property', 'products')
      .should('have.length', 1);
    cy.request(
      'POST',
      '/api/wishlist/604632fb4a84fec80228cd50',
      favoriteProductOne
    );
    cy.request('/api/wishlist/604632fb4a84fec80228cd50')
      .its('body')
      .should('have.property', 'products')
      .should('have.length', 0);
  });
});

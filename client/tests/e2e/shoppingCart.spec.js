/// <reference types="Cypress" />

describe('ShoppingCart', () => {
  beforeEach(() => {
    cy.request('http://localhost:4000/api/prune-database');

    cy.fixture('productOne').then((json) => {
      cy.request('POST', 'http://localhost:4000/api/products', json);
    });
    cy.fixture('customer').then((json) => {
      cy.request('POST', 'http://localhost:4000/api/customers', json);
    });
  });

  it('should create a shopping cart for a given customer', async () => {
    cy.visit('http://localhost:3000');
    cy.get('[href="/products"]').first().click();
    cy.get('[href="/products/all"]').click();
    cy.get('[data-testid=category_0]').click();
    cy.contains('Add to cart').first().click();
    cy.get('[href="/cart"]').click();
    cy.get('[data-testid=orderItem]').should('have.length.greaterThan', 0);
  });
});

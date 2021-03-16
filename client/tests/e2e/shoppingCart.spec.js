/// <reference types="Cypress" />

describe('ShoppingCart', () => {
  beforeEach(() => {
    cy.fixture('productOne').then((json) => {
      cy.request('POST', 'http://localhost:4000/api/products', json);
    });
  });

  it('should create a shopping cart for a given customer', async () => {
    cy.fixture('customer').then((json) => {
      cy.request('POST', 'http://localhost:4000/api/customers', json);
    });
    cy.visit('http://localhost:3000');
    cy.get('[href="/products"]').first().click();
    cy.get('[href="/products/all"]').click();
    cy.get('[data-testid=category_0]').click();
    cy.contains('Add to cart').first().click();
    cy.get('[href="/cart"]').click();
    cy.get('[data-testid=orderItem]').should('have.length.greaterThan', 0);

    // cy.request('http://localhost:4000/api/customers')
    //   .its('body')
    //   .then((body) => {
    //     const customerId = body[0]._id;
    //     cy.request('http://localhost:4000/api/products')
    //       .its('body')
    //       .then((body) => {
    //         const productId = body[0]._id;
    //         cy.request(
    //           'POST',
    //           `http://localhost:4000/api/shopping-cart/${customerId}`,
    //           { orderItem: { productId, quantity: 2 } }
    //         );
    //       });
    //   });
  });
});

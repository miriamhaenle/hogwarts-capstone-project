/// <reference types="Cypress" />

describe('<ProductForm />', () => {
  beforeEach(() => {
    cy.request('http://localhost:4000/api/prune-database');

    cy.visit('/');
    cy.get('[href="/products"]').first().click();
    cy.get('[href="/products/add-product"]').click();
  });

  it('should render', () => {
    cy.get('[data-testid="add-product-form"]').should('be.visible');
  });

  it('should fill in the form properly', () => {
    const productToCreate = {
      name: 'ElderWand',
      price: 200,
      currency: 'Sickle',
      category: 'Magical artifacts',
      packageSize: 'M',
      tags: ['Wand', 'Magic', 'Core of gold'],
      supportContact: 'olivander-wands@mail.wiz',
      onSale: false,
    };

    cy.get('input[name="name"]').type(productToCreate.name);

    cy.get('input[name=price]').type(productToCreate.price);

    cy.get('[name=currency]').select(productToCreate.currency);

    cy.get('[name=category]').select(productToCreate.category);

    cy.get('[name=packageSize').check(productToCreate.packageSize);

    cy.get('[name=supportContact]').type(productToCreate.supportContact);

    cy.get('[name="tags"]')
      .type('One{Enter}')
      .type('Two{Enter}')
      .type('Three{Enter}');

    productToCreate.onSale && cy.get('[name="onSale"]').check();

    cy.get('button[type="submit"]').click();

    cy.get('[href="/products/all"]').click();

    cy.get('[data-testid="product-card"]').contains(productToCreate.name);
  });
});

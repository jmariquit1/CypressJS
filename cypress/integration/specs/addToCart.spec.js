import { addProductToCart } from '../../support/pages/addToCart';
import { label } from '../../support/pages/login';

describe('Add to Cart', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  it('should add a product to the cart', () => {

    // Register a new user
    const randomNumber = Math.floor(Math.random() * 10000);
    const firstName = 'Jenivee';
    const lastName = 'Mar';
    const email = `jenivee+${randomNumber}@gmail.com`;
    const password = 'password123';

    cy.register(firstName, lastName, email, password);

    // Login
    cy.url().should('include', '/login');
    cy.login(email, password);

    // Making validations while Waiting for the entire page to load
    cy.url().should('include', '/account');
    label.drodownMenu().should('contain', `${firstName} ${lastName}`);

    // Add a product to the cart
    addProductToCart();

    cy.contains('Product added to shopping cart.').should('be.visible');
  });
});
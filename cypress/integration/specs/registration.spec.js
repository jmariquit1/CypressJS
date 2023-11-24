import { button, ctaLink, form, label } from '../../support/pages/registration';

describe('Registration Page', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  it('should navigate to the registration page', () => {
    button.signIn().click();
    ctaLink.register().click();

    cy.url().should('include', '/register');
    form.registrationForm().should('be.visible');
    label.registrationForm().should('have.text', 'Customer registration');
  })

  it('should successfully register a new user', () => {
    const randomNumber = Math.floor(Math.random() * 100);

    cy.register('Jeni', 'Mar', `jenivee+${randomNumber}@gmail.com`, 'password123');

    //Verify redirect to login page
    cy.url().should('include', '/login');
  });
});
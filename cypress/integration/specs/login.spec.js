import { buttons,label } from '../../support/pages/login';

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  it('should navigate to the login page', () => {
    buttons.signIn().click();

    label.loginForm().should('have.text', 'Login');
  })

  it('should successfully login a user', () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    const firstName = 'Jenivee';
    const lastName = 'Mar';
    const email = `jenivee+${randomNumber}@gmail.com`;
    const password = 'password123';

    cy.register(firstName, lastName, email, password);

    //Login
    cy.url().should('include', '/login');
    label.loginForm().should('have.text', 'Login');
    cy.login(email, password);

    //Verify redirect to login page
    cy.url().should('include', '/account');
    label.drodownMenu().should('contain', `${firstName} ${lastName}`);
  });
});
class checkout {
  checkoutItem () {

    cy.get('[data-test="nav-cart"]').click();
    cy.wait(5000); //Give time for the page to load

    //Checkout process
    cy.get('[data-test="proceed-1"]').click();
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="proceed-3"]').click();

    //Payment method
    cy.get('[data-test="payment-method"]').select('Bank Transfer');
    cy.get('[data-test="account-name"]').type('Jenivee Mar');
    cy.get('[data-test="account-number"]').type('1092719271');

    cy.get('[data-test="finish"]').click();
    cy.get('.alert-success>div').should('have.text', 'Payment was successful')
  }
}

export default new checkout();
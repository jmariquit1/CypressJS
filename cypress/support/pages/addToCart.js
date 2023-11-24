class addToCart {

  addProductToCart() {
    cy.get('[data-test="nav-home"]').click();
    cy.get('.lead').should('be.visible');

    let clicked = false;

    cy.get('.card').each((card) => {
      if (clicked) return;

      const isOutOfStock = Cypress.$(card).find('[data-test="out-of-stock"]').length > 0;

      if (!isOutOfStock) {
        cy.wrap(card).click();
        cy.get('[data-test="add-to-cart"]').click();
        clicked = true;
      }
    });
  }
}

export default new addToCart();
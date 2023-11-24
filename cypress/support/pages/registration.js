class registration {
  button = {
    signIn: () => cy.get('[data-test="nav-sign-in"]'),
    register: () => cy.get('[data-test="register-submit"]'),
}
input = {
    firstName: () => cy.get('[data-test="first-name"]'),
    lastName: () => cy.get('[data-test="last-name"]'),
    dob : () => cy.get('[data-test="dob"]'),
    address: () => cy.get('[data-test="address"]'),
    postCode: () => cy.get('[data-test="postcode"]'),
    city: () => cy.get('[data-test="city"]'),
    state: () => cy.get('[data-test="state"]'),
    country: () => cy.get('[data-test="country"]'),
    phone: () => cy.get('[data-test="phone"]'),
    email: () => cy.get('[data-test="email"]'),
    password: () => cy.get('[data-test="password"]'),
    selectCountry: () => cy.get('select option'),
}

ctaLink = {
  register: () => cy.get('[data-test="register-link"]'),
}

form ={
  registrationForm: () => cy.get('[data-test="register-form"]'),
}

label = {
  registrationForm: () => cy.get('div h3'),
}

verifyRegistrationFormHeaderToContain (text) {
  this.label.registrationForm().should('have.text', text);
}

selectACountry (text) {
  this.input.country().click();
  this.input.selectCountry().contains(text).click();
}

}

export default new registration();
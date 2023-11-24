class login {
    buttons = {
      signIn: () => cy.get('[data-test="nav-sign-in"]'),
      login: () => cy.get('[data-test="login-submit"]'),
    }
    inputField = {
      email: () => cy.get('[data-test="email"]'),
      password: () => cy.get('[data-test="password"]'),
    }

    label = {
      loginForm: () => cy.get('div h3'),
      drodownMenu: () => cy.get('[data-test="nav-user-menu"]'),
    }
}
export default new login();
import { button, ctaLink, input } from './pages/registration';
import { buttons, inputField} from './pages/login';

Cypress.Commands.add('register', (firstName, lastName, email, password) => {

    //Navigate to the registration page
    button.signIn().click();
    ctaLink.register().click();

    //Fill out the registration form
    input.firstName().type(firstName);
    input.lastName().type(lastName);
    input.dob().type('2000-01-01');
    input.address().type('Bulevardi Zogu I, Qendra Tregtare Tirana, K. I');
    input.postCode().type('12345');
    input.city().type('Tirana');
    input.country().select('Albania');
    input.state().type('Tirana');
    input.phone().type('1234567890');
    input.email().type(email);
    input.password().type(password);

    //Submit the registration form
    button.register().click();
})

Cypress.Commands.add('login', (email, password) => {
  inputField.email().type(email);
  inputField.password().type(password);
  buttons.login().click();
})
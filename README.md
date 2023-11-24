# CypressJS

## Setup and Test Execution Instructions

### Prerequisites

- Text Editor (VS Code)
- Node.js (recommended version v18.18.0)

### Installation

- Clone the repository: `git@github.com:jmariquit1/CypressJS.git`
- Navigate to project directory `cd your-project`
- Run `npm i` to install all the dependencies

## Test Execution

- Run `npm run cypress:open` or `npx cypress open` to open the cypress test runner
- Run `npm run cypress:run` or `npx cypress run` to run the code in headless browser

- Use `npm run login` to run login only
- Use `npm run registration` to run registration only
- Use `npm run AddToCart` to run Add to Cart only
- Use `npm run checkout` to run Checkout only

## Approach and Assumptions

## Approach

- Page Object Model (POM)
  - The project follows the Page Object Model to organize test code into reusable and maintainable components. Page objects representing different pages of the application are stored in the `./cypress/support/pages` directory. This helps in enhancing code readability, reducing redundancy, and simplifying maintenance.
- Custom Commands
  - To handle repetitive login and registration tasks, custom Cypress commands have been created. These commands are stored in the `./cypress/support/commands` directory. For example, the login command abstracts the login process, making test scripts more concise and promoting code reusability.

## Assumptions

- The application under test has a consistent structure that aligns with the Page Object Model.
- The login and registration processes follow a standard flow that can be abstracted into custom commands.

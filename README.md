# Project Overview

This project utilizes the following technology stack and tools to build and maintain a robust and efficient web application.

## Technology Stack

### React with TypeScript

React is a popular JavaScript library for building user interfaces. Combined with TypeScript, it allows developers to write type-safe code, reducing bugs and improving code quality. TypeScript's static typing and advanced type inference make the development process more efficient and maintainable.

### Vite

Vite is a build tool that provides a fast development environment for modern web projects. It leverages native ES modules to deliver a fast and optimized build process, making the development experience smoother and more efficient.

### pnpm

pnpm is a fast, disk space-efficient package manager for JavaScript. It is known for its speed and ability to save disk space by using a unique symlink strategy to manage dependencies.

## Important Libraries

### Axios

Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests and handling responses, providing an easy-to-use API for interacting with backend services.

### Day.js

Day.js is a minimalist JavaScript library for parsing, validating, manipulating, and displaying dates and times. It offers a straightforward API and a small footprint, making it an excellent choice for handling date and time operations in the application.

### js-cookie

js-cookie is a simple, lightweight JavaScript API for handling cookies. It allows you to create, read, and delete cookies in a straightforward manner, providing essential functionality for managing user sessions and other cookie-based data.

## End-to-End Testing

End-to-end (E2E) tests are implemented using Cypress to ensure the reliability of critical user functionalities, such as login and logout. Cypress is a powerful E2E testing framework that provides a complete testing experience for web applications.

### Running E2E Tests

To run the E2E tests, follow these steps:

1. Open a terminal.
2. Navigate to the project directory.
3. Execute the command: `pnpm cypress open`

This command will open the Cypress Test Runner, allowing you to run the predefined E2E tests and verify that the login and logout functionalities are working as expected.

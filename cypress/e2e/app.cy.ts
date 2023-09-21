/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.viewport("macbook-15");

    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="blog"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/blog");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("Latest Blogs");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

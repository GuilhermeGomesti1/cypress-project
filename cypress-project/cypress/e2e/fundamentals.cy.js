describe("Fundamentals test", () => {
  it("Contains correct header text", () => {
    cy.visit("/fundamentals");
    cy.get('[data-test="fundamentals-header"]').contains(
      /Testing Fundamentals/i
    );
  });
});
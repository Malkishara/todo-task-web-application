describe("View and Complete Tasks", () => {
    it("should mark a task as done", () => {
      cy.visit("/");
  
      cy.contains("Cypress Test Task")
        .parent()
        .contains("Done")
        .click();
  
      cy.contains("Task status updated successfully!").should("be.visible");
    });
  });
  
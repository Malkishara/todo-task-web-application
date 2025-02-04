describe("ToDo App", () => {
    it("should add a new task", () => {
      cy.visit("/");
  
      cy.get("input[label='Title']").type("Cypress Test Task");
      cy.get("textarea[label='Description']").type("This is a test description");
      cy.get("button").contains("Add").click();
  
      cy.contains("Task added successfully!").should("be.visible");
    });
  });
  
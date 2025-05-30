describe("Quiz Application", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3002/");
  });

  it("Displays the Start Quiz button", () => {
    cy.contains("Start Quiz").should("be.visible");
  });
  it("Start Quiz", () => {
    cy.contains("Start Quiz").click();
  });
  it("Displays Question & Answers", () => {
    cy.contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get(".btn-primary").should("have.length", 4);
  });
  it("Displays next question after answering", () => {
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".card").should("be.visible");
  });
  it("Quiz Completed", () => {
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.contains("Quiz Completed").should("be.visible");
  });
  it("Quiz Completed and Score is Shown", () => {
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Your score:").should("be.visible");
  });
  it("Quiz Completed and Can Take New Quiz", () => {
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.contains("Take New Quiz").should("be.visible");
    cy.contains("Take New Quiz").click();
    cy.get(".card").should("be.visible");
  });
});

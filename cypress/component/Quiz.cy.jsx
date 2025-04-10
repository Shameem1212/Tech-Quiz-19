import React from "react";
import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  it("Displays the Start Quiz button", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible");
  });
  it("Start Quiz", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
  });
  it("Displays Question & Answers", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get(".btn-primary").should("have.length", 4);
  });
  it("Displays next question after answering", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".card").should("be.visible");
  });
  it("Quiz Completed", () => {
    mount(<Quiz />);
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
    mount(<Quiz />);
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
    mount(<Quiz />);
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

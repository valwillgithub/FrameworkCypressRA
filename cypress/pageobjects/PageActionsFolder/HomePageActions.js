//import cypress from "cypress"
import HomePageElements from "../PageElementsFolder/HomePageElements";

export default class HomePageActions {
  constructor() {
    globalThis.homeElement = new HomePageElements();
  }

  navigatToUrl() {
    //cy.visit('/')
    cy.log(Cypress.env("url"));
    cy.visit(Cypress.env("url"));
  }

  validateTitle() {
    return cy.title();
  }

  loginAsBankManager() {
    homeElement.bankManagerLoginBtn().click();
  }

  loginAsCustomer() {
    homeElement.customerLoginBtn().click();
  }
} //class

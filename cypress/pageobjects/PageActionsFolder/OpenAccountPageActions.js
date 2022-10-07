import OpenAccountPageElements from "../PageElementsFolder/OpenAccountPageElements";
import checkAlert from "../../libraryfolder/utils";

export default class OpenAccountPageActions {
  constructor() {
    globalThis.openAccountElement = new OpenAccountPageElements();
  }

  openAccount(customer, currency) {
    openAccountElement.openAccountBtn().click();
    cy.log("customer", customer);
    //cy.log('length => ' +customer.length)
    openAccountElement.customerName().select(customer);
    openAccountElement.currency().select(currency);
    openAccountElement.processBtn().click();
    //checkAlert("Account created successfully with account Number");
  }

  verifyAlert(msg) {
    checkAlert(msg);
  }
} //class

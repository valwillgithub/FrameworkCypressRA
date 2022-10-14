import OpenAccountPageElements from "../PageElementsFolder/OpenAccountPageElements";
import { verifyAlert1, verifyAlert2 } from "../../libraryfolder/utils";

export default class OpenAccountPageActions {
  constructor() {
    globalThis.openAccountElement = new OpenAccountPageElements();
  }

  openAccount(customer, currency, msg) {
    openAccountElement.openAccountBtn().click();
    cy.log("customer => ", customer);
    cy.log("length => " + customer.length);
    cy.log("msg => " + msg);

    openAccountElement.customerName().select(customer);
    openAccountElement.currency().select(currency);
    //cy.pause();

    openAccountElement.processBtn().click();
    //verifyAlert1("Account created successfully with account VAL");
    verifyAlert1(msg);
  }
} //class

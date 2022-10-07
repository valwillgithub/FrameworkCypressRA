import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePageActions from "../../pageobjects/PageActionsFolder/HomePageActions";
import AddCustomerPageActions from "../../pageobjects/PageActionsFolder/AddCustomerPageActions";
import OpenAccountPageActions from "../../pageobjects/PageActionsFolder/OpenAccountPageActions";

import {
  verifyAlert1,
  getRandomNumber,
  updateTestData,
} from "../../libraryfolder/utils";

const homePage = new HomePageActions();
const addCust = new AddCustomerPageActions();
const accountOpen = new OpenAccountPageActions();

let fullName;

Given("I navigate to XYZ Bank website", () => {
  homePage.navigatToUrl();
});

When("I login as a bank manager", () => {
  homePage.loginAsBankManager();
});

And("I add a new customer", (table) => {
  //let data = table.hashes()[0];
  //cy.log(data['firstName'] +" === "+data['lastName'] +" === "+data['postCode']);
  let num = getRandomNumber();
  table.hashes().forEach((element) => {
    fullName = element.firstName + num + " " + element.lastName + num;
    cy.log("fullName ==> " + fullName);
    cy.log("fullName length ==> " + fullName.length);
    for (let i = 0; i < fullName.length; i++) {
      cy.log(i + "==" + fullName[i]);
    }
    //cy.pause()
    cy.log(
      "element statement => " +
        element.firstName +
        " === " +
        element.lastName +
        " === " +
        element.postCode
    );
    addCust.addCustomerDetails(
      element.firstName + num,
      element.lastName + num,
      element.postCode + num
    );
    verifyAlert1(element.alertMsg);
    updateTestData(fullName);
  });
});

Then("I can open an account for the customer", (datatbl) => {
  let data = datatbl.hashes()[0];
  cy.readFile("cypress/fixtures/testdata.json").then((data) => {
    let ts = String(data.fullname); //.toString()
    cy.wrap(ts).as("valName");
    cy.log("ts ==> " + ts);
    cy.log("typeof(ts) => " + typeof ts);
  });
  accountOpen.openAccount(cy.get("@valName").toString(), "Pound");
});

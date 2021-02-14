import HomePageActions from "../../pageobjects/PageActionsFolder/HomePageActions";
import AddCustomerPageActions from "../../pageobjects/PageActionsFolder/AddCustomerPageActions";
import OpenAccountPageActions from "../../pageobjects/PageActionsFolder/OpenAccountPageActions";
import { verifyAlert1, getRandomNumber } from "../../libraryfolder/utils";

describe("Open Account TestSuite", () => {
  const homePage = new HomePageActions();
  const addCust = new AddCustomerPageActions();
  const openaccount = new OpenAccountPageActions();
  let num = getRandomNumber();

  before(() => {
    cy.fixture("testdata").then((data) => {
      data.firstname = data.firstname + num;
      data.lastname = data.lastname + num;
      data.customer = data.firstname + " " + data.lastname;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homePage.navigatToUrl();
  });

  it("Open Account Testcase", () => {
    homePage.loginAsBankManager();
    addCust.addCustomerDetails(data.firstname, data.lastname, data.postcode);
    //verifyAlert1(data.alertmsgAddCustomer);
    openaccount.openAccount(data.customer, data.currencyToSelect);
    //openaccount.verifyAlert1(data.accountalert);
    //verifyAlert1(data.accountalert);
  });
}); //describe

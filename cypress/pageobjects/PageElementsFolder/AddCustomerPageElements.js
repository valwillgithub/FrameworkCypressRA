const or = require("../../locators.json")

export default class AddCustomerPageElements{
    
  addCustomerBtn(){
      return cy.get(or.addcustomerpage.addCustomerBtn)
  }
    
  firstName(){
      return cy.get(or.addcustomerpage.firstName)
  }

  lastName(){
    return cy.get(or.addcustomerpage.lastName)
  }

  postCode(){
    return cy.get(or.addcustomerpage.postCode)
  }

  addCustomerSubmit(){
    return cy.get(or.addcustomerpage.addCust)
  }


}//class
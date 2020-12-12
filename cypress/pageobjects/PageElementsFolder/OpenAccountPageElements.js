const or = require("../../locators.json")

export default class OpenAccountPageElements{
    
    openAccountBtn(){
        return cy.get(or.openAccountPage.openAccountBtn)

    }

    customerName(){
        return cy.get(or.openAccountPage.customerName)
    }

    currency(){
        return cy.get(or.openAccountPage.currency)
    }

    processBtn(){
        return cy.get(or.openAccountPage.processBtn)
    }



}//class

const or = require("../../locators.json")

export default class HomePageElements{
    
    customerLoginBtn(){
        return cy.get(or.homepage.customerLoginBtn)
        //return cy.get("button[ng-click='customer()']")

    }

    bankManagerLoginBtn(){
        return cy.get(or.homepage.bankManagerLoginBtn)
    }

}//class
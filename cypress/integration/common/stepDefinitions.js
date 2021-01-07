import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
import HomePageActions from '../../pageobjects/PageActionsFolder/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/PageActionsFolder/AddCustomerPageActions'
import {verifyAlert1, getRandomNumber, updateTestData} from '../../libraryfolder/utils'

const homePage = new HomePageActions()
const addCust = new AddCustomerPageActions()
let fullName


Given('I navigate to XYZ Bank website',() => {
    homePage.navigatToUrl()
}) 

When('I login as a bank manager',() => {
    homePage.loginAsBankManager()
}) 

And('I add a new customer', (table) => {
    
    //let data = table.hashes()[0];
    //cy.log(data['firstName'] +" === "+data['lastName'] +" === "+data['postCode']);
    let num = getRandomNumber()
    table.hashes().forEach(element => {       
        fullName = element.firstName+num+' '+element.lastName+num        
        cy.log('fullName ==> '+fullName)
        cy.log('fullName length ==> '+fullName.length)
        for(let i = 0; i < fullName.length; i++){
            cy.log(i+'=='+fullName[i])
        }
        //cy.pause()
        cy.log("element statement => "+element.firstName +" === "+element.lastName +" === "+element.postCode); 
        addCust.addCustomerDetails(element.firstName+num, element.lastName+num, element.postCode+num)
        //verifyAlert1(element.alertMsg)
        updateTestData(fullName)
    });



})
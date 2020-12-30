import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
import HomePageActions from '../../../pageobjects/PageActionsFolder/HomePageActions'
import AddCustomerPageActions from '../../../pageobjects/PageActionsFolder/AddCustomerPageActions'
import {verifyAlert1, getRandomNumber} from '../../../libraryfolder/utils'


const homePage = new HomePageActions()
const addCust = new AddCustomerPageActions()

// And('I add a new customer', (table) => {
//     //let data = table.hashes()[0];
//     //cy.log(data['firstName'] +" === "+data['lastName'] +" === "+data['postCode']);
//     let num = getRandomNumber()
//     table.hashes().forEach(element => {
//         cy.log("element statement => "+element.firstName +" === "+element.lastName +" === "+element.postCode); 
//         addCust.addCustomerDetails(element.firstName+num, element.lastName+num, element.postCode+num)
//         verifyAlert1(element.alertMsg)

//     });


// })


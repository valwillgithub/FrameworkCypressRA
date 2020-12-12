import HomePageActions from '../../pageobjects/PageActionsFolder/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/PageActionsFolder/AddCustomerPageActions'
import {verifyAlert1, getRandomNumber} from '../../libraryfolder/utils'

//import { before } from 'cypress/types/lodash'

describe('Add New Customer TestSuite', () => {

    const homePage = new HomePageActions()
    const addCust = new AddCustomerPageActions()
    let num = getRandomNumber()

    before(() => {
        cy.fixture('testdata').then((data)=>{
            data.firstname = data.firstname+num
            data.lastname = data.lastname+num
            data.customer = data.firstname+' '+data.lastname
            globalThis.data = data 
        })
    })

    beforeEach(() => {
        homePage.navigatToUrl()
    })

    it('Add New Customer Testcase', () => {
        homePage.loginAsBankManager()
        addCust.addCustomerDetails(data.firstname, data.lastname, data.postcode)
        verifyAlert1(data.alertmsg)
    })   

})//describe
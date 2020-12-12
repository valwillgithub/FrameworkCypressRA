//const { default: HomePageActions } = require("../pageobjects/PageActionsFolder/HomePageActions")

import HomePageActions from '../../pageobjects/PageActionsFolder/HomePageActions'

describe('Login As Bank Manager Testcase',() =>{

    const homePage = new HomePageActions()

    beforeEach(() => {
        homePage.navigatToUrl()

    })

    it('Validate Title of the Page', ()=>{
        homePage.validateTitle().should('eq','Protractor practice website - Banking App' )

    })//it

    it('Verify Login As Bank Manager', ()=>{
        homePage.loginAsBankManager()

    })//it

    it('Verify Login As Customer', ()=>{
        homePage.loginAsCustomer()

    })//


})//describe
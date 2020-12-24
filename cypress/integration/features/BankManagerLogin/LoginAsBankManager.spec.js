//import HomePageActions from '../../pageobjects/PageActionsFolder/HomePageActions'
import HomePageActions from '../../../pageobjects/PageActionsFolder/HomePageActions'

const homePage = new HomePageActions()

Given('I navigate to the website',() => {
    homePage.navigatToUrl()
}) 

When('I click on Bank Manager Login Button',() => {
    homePage.loginAsBankManager()
}) 

And('validate the page title',() => {
    homePage.validateTitle().should('eq','Protractor practice website - Banking App' )
}) 
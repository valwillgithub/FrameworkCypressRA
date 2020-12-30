//import HomePageActions from '../../pageobjects/PageActionsFolder/HomePageActions'
import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
import HomePageActions from '../../../pageobjects/PageActionsFolder/HomePageActions'

const homePage = new HomePageActions()

Then('validate the page title',() => {
    homePage.validateTitle().should('eq','Protractor practice website - Banking App' )
}) 
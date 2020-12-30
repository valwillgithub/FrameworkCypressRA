import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import OpenAccountPageActions from '../../../pageobjects/PageActionsFolder/OpenAccountPageActions'

const openaccount = new OpenAccountPageActions()

Then('I can open an account for the customer', (datatbl) => {
    cy.pause()
    let data = datatbl.hashes()[0];
    const fn = cy.get('@fName')
    openaccount.openAccount(fn, 'Pound')
    openaccount.verifyAlert(data['alertMsg'])

})



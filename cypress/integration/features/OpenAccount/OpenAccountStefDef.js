import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import OpenAccountPageActions from '../../../pageobjects/PageActionsFolder/OpenAccountPageActions'

const openaccount = new OpenAccountPageActions()
//var val  
let ts
let rc

Then('I can open an account for the customer', (datatbl) => {
    let data = datatbl.hashes()[0]
    let val = null;
    cy.readFile('cypress/fixtures/testdata.json').then((data) =>  {
        //cy.fixture('testdata').then((data) => {    
        ts = String(data.fullname)//.toString()    
        cy.wrap(ts).as('valName')
        cy.log('ts ==> ' + ts)
        cy.log('typeof(ts) => ' + typeof (ts))
        //cy.log(data.fullname)
        //val = JSON.stringify(data.fullname).trim()
        //cy.log('val lenghth==> ' + val.length)
        // cy.pause()
        //openaccount.openAccount(ts, 'Dollar')

    })
    //cy.log('typeof(ts) =>' + typeof (ts))
    //cy.log('ts lenghth==> ' + ts.length)
    // cy.get('@valName').then((vn) => {
    //      rc = vn.toString()
    // })
    openaccount.openAccount(cy.get('@valName').toString(), 'Pound') 
    openaccount.verifyAlert(data['alertMsg'])

})



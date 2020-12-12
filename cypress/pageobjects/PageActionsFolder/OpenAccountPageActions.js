
import OpenAccountPageElements from '../PageElementsFolder/OpenAccountPageElements'

export default class OpenAccountPageActions{

        constructor(){
            globalThis.openAccountElement = new OpenAccountPageElements()
        }

openAccount(customer,currency){
    openAccountElement.openAccountBtn().click()
    openAccountElement.customerName().select(customer)
    openAccountElement.currency().select(currency)
    openAccountElement.processBtn().click()
}        

verifyAlert(msg) {
    //window:alert
    cy.on('window:alert',(str)=>
    {
       expect(str).contains(msg)
    })
}




}//class
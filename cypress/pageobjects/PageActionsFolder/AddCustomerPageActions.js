
import AddCustomerPageElements from '../PageElementsFolder/AddCustomerPageElements'
export default class AddCustomerPageActions{
    
constructor(){
    globalThis.custElement = new AddCustomerPageElements()
}

addCustomerDetails(firstName, lastName, pCode){
    custElement.addCustomerBtn().click()
    custElement.firstName().type(firstName)
    custElement.lastName().type(lastName)
    custElement.postCode().type(pCode)
    custElement.addCustomerSubmit1().click()
}

verifyAlert(msg) {
    //window:alert
    cy.on('window:alert',(str)=>
    {
       expect(str).contains(msg)
    })
  }

}//class
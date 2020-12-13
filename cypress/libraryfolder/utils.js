
export function verifyAlert1(msg) {
    //window:alert
    cy.on('window:alert',(str)=>
    {
       expect(str).contains(msg)
    })
  }

  export function verifyAlert2(msg) {
    //window:alert
    cy.on('window:alert',(str)=>
    {
       expect(str).contains(msg)
    })
  }

export function getRandomNumber() {
    const min = 2
    const max = 100
    return Math.floor(Math.random() * (max - min + 1) + min)//The maximum is inclusive and the minimum is inclusive


}

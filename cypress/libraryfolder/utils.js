const fs = require("fs");

export function verifyAlert1(msg) {
  //window:alert
  cy.on("window:alert", (str) => {
    expect(str).contains(msg);
  });
}

export function checkAlert(msg) {
  //window:alert
  cy.on("window:alert", (str) => {
    expect(str).contains(msg);
  });
}

export function getRandomNumber() {
  const min = 10;
  const max = 99;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function updateJsonFile(filePath, newName) {
  let testData;
  fs.readFile(filePath, "utf-8", (readError, fileData) => {
    if (readError) {
      return readError.message;
    }
    try {
      testData = JSON.parse(fileData);
    } catch (parseError) {
      console.log("Error parsing JSON", parseError);
      return parseError.message;
    }
    testData.fullname = newName;
    fs.writeFile(filePath, JSON.stringify(testData, null, 2), (writeError) => {
      if (writeError) {
        console.log(writeError.message);
      } else {
        console.log("File successfully written!");
      }
    });
  });
} //updateJsonFile

export function updateTestData(newName) {
  cy.fixture("testdata").then((data) => {
    data.fullname = newName;
    cy.writeFile("cypress/fixtures/testdata.json", data);
  });
} //updateTestData

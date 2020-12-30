Feature: Bank Manager Login

    I want to login as the Bank Manager
    
    Scenario: Login as Bank Manager
        Given I navigate to XYZ Bank website
        When I login as a bank manager
        Then validate the page title
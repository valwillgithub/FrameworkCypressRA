Feature: Create a new bank account feature
    As a bank manager I want to be able
    to open an account for a new customer

    Scenario: Create a new bank account scenario
        Given I navigate to XYZ Bank website
        When I login as a bank manager
        And I add a new customer
            | firstName | lastName | postCode | alertMsg                                  |
            | Jessy     | Wales    | 9021     | Customer added successfully with customer |
        Then I can open an account for the customer
            | alertMsg                 |
            | Account created successfully |
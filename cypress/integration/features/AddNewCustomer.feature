Feature: Create a new customer as a bank manager
    As a bank manager I want to be able
    to create a new bank customer

    @smoke
    Scenario: Login as Bank Manager
        Given I navigate to XYZ Bank website
        When I login as a bank manager
        And I add a new customer
            | firstName | lastName | postCode |alertMsg                                  |
            | Jessy     | Wales    | 9021     |Customer added successfully with customer |

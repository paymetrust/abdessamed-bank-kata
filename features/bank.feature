Feature: Deposit of money to a customer's account

    A bank usecases

    Scenario: Deposit of money to a customer's account with a valid amount
        Given a customer with a balance of €100
        When the customer deposits €50
        Then the deposit should be successful

    Scenario: Deposit of money to a customer's account with an invalid amount
        Given a customer with a balance of €100
        When the customer deposits less than €0.01
        Then the deposit should be rejected

    Scenario: Consulting the balance of a customer's account successfully
        Then the customer should be able to see the balance of his account, which is €250

    Scenario: Withdrawal of money from a customer's account with insufficient funds
        Given a customer with a balance of $250
        When the customer failed to withdraw more than his balance

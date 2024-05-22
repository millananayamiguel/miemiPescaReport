
Feature: Login test suite

    Scenario:  login invalid

    Given  I visit "https://www.saucedemo.com/"
    When I type standard_user on the Username credential input
    And I type Locked_Out_User on the Username credential input
    And I type secret_sauce on the password credential input
   # Then invalid user
   
    Scenario: login valid
    Given  I visit "https://www.saucedemo.com/"
    


    

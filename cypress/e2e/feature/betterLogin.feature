#Buenas Practiacss para caso de Pruebas
@regression @loginSteps

Feature: Login test good practices


Background: : visit the login sauce page
Given I visit "https://www.saucedemo.com/"

Scenario: Login Standard user and valid password
  
  When I type standard_user on the Username credential input
  And I type secret_sauce on the password credential input
@smoke
Scenario: Login Locked Out User and valid password

  When I type Locked_Out_User on the Username credential input
  And I type secret_sauce on the password credential input

Scenario: Login with parameterized User and valid password
  When I type "Galicia" on the Username credential input
  And I type "1234" on the password credential input
  
Scenario: Login with parameterized inputs and text values
  When I type on the credential input "username" the text value "Alfredo"
  When I type on the credential input "password" the text value "claroquesi"


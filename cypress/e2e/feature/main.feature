
Feature: visit the main page


Background: : visit the main page
Given I visit "https://miemipesca.com/"
And  I click cookies

Scenario:contain text 

#Given I check that the page contain the text "miemipesca" 
#When  I validate title
#And   I search product
#And   I select product
#Then  I click search product

Scenario: Click logo Url to product
When I click logoUrl
When I click depredator
And  I select depredator

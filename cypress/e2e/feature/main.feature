
Feature: visit the main page


Background: : visit the main page
Given I visit my url
And  I click cookies

Scenario:contain text 

Given I check that the page contain the text "miemipesca" 
When  I validate title
And   I search product
And   I select product
Then  I click search product

Scenario: Select product to list
When I click logoUrl
When I click depredator
And  I select depredator

Scenario: Suggestion select
Given I click suggestion
When I select asunt
And I add email
And I add message
And I check private
And I click submit
Then I message error

Feature: Search
  In order to search contents on Wikipedia
  As a user
  I need to fill the search field, submit and read the results

  Scenario: Search for "Behaviour driven development"
    Given I am on wikipedia
    When I search for "Behaviour driven development"
    Then the page should contain "Test-driven development"
Feature: string to lowercase

  Scenario: Convert string to lowercase
    Given I have a string ABC
    When I convert it to be lowercase
    Then I should get abc 
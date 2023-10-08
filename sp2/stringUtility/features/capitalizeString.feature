Feature: string to capitalized string

  Scenario: Convert string to capitalized string
    Given I have a string abc
    When I convert it to be capitalized
    Then I should get ABC   
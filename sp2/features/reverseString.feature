Feature: string to reverse string

  Scenario: Convert string to reverse
    Given I have a string abc
    When I convert it to be reversed
    Then I should get "cba"   
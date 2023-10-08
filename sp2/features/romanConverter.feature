Feature: Arabic to Roman Numeral Converter

  Scenario: Convert Arabic number to Roman numeral
    Given I have the Arabic number 1
    When I convert it to a Roman numeral
    Then I should get "I"   
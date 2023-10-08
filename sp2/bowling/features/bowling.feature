Feature: Bowling Game

  Scenario: Rolling a gutter game
    Given a new bowling game
    When I roll 0 pins 20 times
    Then my total score should be 0

  Scenario: Rolling all ones
    Given a new bowling game
    When I roll 1 pin 20 times
    Then my total score should be 20

  Scenario: Rolling one spare
    Given a new bowling game
    When I roll 5 pins 2 times
    And I roll 3 pins 18 times
    Then my total score should be 67

  Scenario: Rolling one strike
    Given a new bowling game
    When I roll 10 pins 1 time
    Then my total score should be 10

  Scenario: Rolling a perfect game
    Given a new bowling game
    When I roll 10 pins 12 times
    Then my total score should be 300
# 1 REFLECTIONS
## 1.1 COMPUTER MOUSE 
### Identify the types of testing you would perform on a computer mouse, to make sure that it is of the highest quality. 

* Hardware Test
* Electricity Test
* Software Test
* Durability Test
* Usability Test
* Compatibility Test
* Performance Test

## 1.2 Catastrophic Failure
### Find a story where a software system defect had a bad outcome. Describe what happened. Can you identify a test that would have prevented it? 

The Therac-25 was a radiation therapy machine produced by Atomic Energy of Canada Limited (AECL) in 1982 after the Therac-6 and Therac-20 units (the earlier units had been produced in partnership with CGR of France). It was involved in at least six accidents between 1985 and 1987, in which patients were given massive overdoses of radiation, approximately 100 times the intended dose. These accidents highlighted the dangers of software control of safety-critical systems, and they have become a standard case study in health informatics and software engineering. The software was written in assembly language for a custom CPU.

# 2 TWO KATAS 
## 2.1 STRING UTILITY
### Use BDD to create a string utility with the following methods: 
### 1.Reverse string (aBc -> cBa)
### 2.Reverse string (aBc -> cBa)
### 3.Reverse string (aBc -> cBa)
### Don’t use any built-in string utility – create your own. Remember, the exercise here is touse BDD, not to deliver a working utility without tests. If there are no tests in thesolution, it won’t be accepted. 

View folder stringUtility for this assignment

## 2.2 BOWLING GAME KATA 

view folder bowling for this assignment

# 3 Investigation Of Tools
## 3.1 JUNIT 5 
### Investigate JUnit 5 (Jupiter). Explain the following, and how they are useful. 
1. @Tag
   - @Tag allows you to categorize your tests using user-defined tags or labels.
   - Useful for organizing the selectively running teests based on specific criteria
   - Helps you group and filteer tests, making it easier to manage and execute different sets of tests.
2. @Disabled
   - @Disabled is used to temporarily disable a test mtehod or test class without removing it from the codebase.
   - Useful when you have failing tests that need investigation but don't want to run them during regular test executions.
   - Allows you to maintain the test code and re-enable the tests when the issues are resolved.
3. @RepeatedTest
   - @RepeatedTest allows you to run a test method multiple times with a specified repetition count.
   - Useful for testing scenarios where you want to ensure the stability of a test by running it repeatedly.
4. @BeforeEach and @AfterEach
   - @BeforeEach and @AfterEach annotations are used to specify methods that run before and after each test method in a test class, respectively.
   - Useful for setting up common preconditions and cleaning up resources after each test.
   - Reduces code duplication and ensures a clean and consistent test environment for each test method.
5. @BeforeAll and @AfterAll
   - @BeforeAll and @AfterAll annotations are used to specify methods that run once before and after all test methods in a test class, respectively.
   - Useful for expensive setup or teardown operations that are common to all tests in a class.
6. @DisplayName
   - @DisplayName allows you to provide a custom name or description for a test method or test class.
   - Useful for creating more informative and human-readable test reports and documentation.
7. @Nested
   - @Nested is used to create inner classes within a test class, allowing you to group related test methods together.
   - Useful for improving test organization and readability, especially when dealing with complex test scenarios.
8. assumeFalse and assumeTrue
   - assumeFalse and assumeTrue are methods from the org.junit.jupiter.api.Assumptions class that allow you to conditionally skip test execution based on certain assumptions.
   - Useful for skipping tests when specific conditions are not met, without causing test failures.

## 3.2 MOCKING FRAMEWORKS 
### Investigate mocking frameworks for your preferred language. Choose at least two frameworks, and answer the questions. (One could be Mockito, which we saw in class.) 


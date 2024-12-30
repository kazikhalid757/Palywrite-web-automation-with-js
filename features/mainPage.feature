Feature: Playwright Website Navigation

  Scenario: Check Navigation Links
    Given Check that Playwright logo is visible
    Then Check that Playwright Docs option is visible
    Then Check that Playwright API option is visible
    Then Check that Playwright Community option is visible

  Scenario: Successful Search Docs in Playwright Search option section
    Given Check that Playwright Search option is visible
    When Enter a keyword in the search box
    And Click that Search result
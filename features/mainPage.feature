Feature: Main Page Check

  Scenario: Successful Playwright web page showing
    Given Check that Playwright logo is visible
    Then  Check that Playwright Docs option is visible
    Then  Check that Playwright API option is visible
    Then  Check that Playwright Nodejs option is visible
    Then  Check that Playwright Community option is visible

  Scenario: Successful Search Docs in Playwright Search option section
      Given Check that Playwright Search option is visible
      When Click that Search option
      And Enter a keyword in the search box
      When Click that Search result 
      Then Check that page is visible

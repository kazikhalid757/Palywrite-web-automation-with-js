
# Playwright Cucumber POM Project

This project is a Playwright-based web automation framework using the Page Object Model (POM) and Cucumber for behavior-driven development (BDD). It provides an organized structure for writing tests and features clear reporting capabilities.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Report Generation](#report-generation)
- [Contributing](#contributing)

## Features

- Uses Playwright for cross-browser web automation.
- Implements the Page Object Model for better test organization.
- Supports behavior-driven development with Cucumber.
- Generates HTML and JSON reports for test results.

## Requirements

- Node.js (>= 14.x)
- NPM (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kazikhalid757/Palywrite-web-automation-with-js.git
    cd Palywrite-web-automation-with-js
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Project Structure

```
/playwright-cucumber-pom
├── /features           # Contains Cucumber feature files
│   └── mainPage.feature
├── /steps              # Contains step definitions
│   └── mainPageSteps.js
├── /pages              # Contains page object models
│   └── mainPage.js
├── /reports            # Contains test reports
├── package.json        # Project metadata and dependencies
└── playwright.config.js # Playwright configuration
```

## Usage

### Writing Tests

Tests are defined in the `steps` directory using Cucumber syntax and Playwright's test functions. You can create additional feature files in the `features` directory and their corresponding step definitions in the `steps` directory.

### Running Tests

Run the tests with the following command:

```bash
npm test
```

### Headless Mode

By default, tests are run in headed mode. To run in headless mode, set the `HEADLESS` environment variable to `true`:


## Report Generation

Test results are generated in HTML and JSON formats. The HTML report can be found in the `reports/html` directory after tests have run. You can view the report by running:

```bash
npx playwright show-report reports/html
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug reports.

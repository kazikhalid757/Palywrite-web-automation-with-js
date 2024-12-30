# Playwright Cucumber POM Project

This project demonstrates web automation testing using Playwright with Cucumber for BDD and Page Object Model (POM) pattern. It includes automated tests for the Playwright official website.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reports](#reports)

## Features

- Playwright for web automation
- Cucumber for BDD
- Page Object Model design pattern
- HTML and JSON reporting
- Cross-browser testing support
- Screenshot and video capture on failure

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Chrome browser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kazikhalid757/Palywrite-web-automation-with-js.git
cd Palywrite-web-automation-with-js
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Project Structure

```
project_root/
├── features/
│   ├── mainPage.feature         # Cucumber feature files
│   ├── step_definitions/        # Step definition files
│   │   └── mainPageSteps.js
│   └── support/                 # Support files
│       └── world.js
├── pages/                       # Page Object files
│   └── mainPage.js
├── cucumber.js                  # Cucumber configuration
├── package.json                 # Project dependencies
└── playwright.config.js         # Playwright configuration
```

## Running Tests

Run all tests:
```bash
npm run test
```

Run with debug mode:
```bash
npm run test:debug
```

## Reports

Test results are generated in two formats:
- HTML Report: `cucumber-report.html`
- JSON Report: `reports/cucumber-report.json`

To view the HTML report, open `cucumber-report.html` in your browser after the test run.

## Test Scenarios

The project includes tests for:
- Navigation menu visibility
- Logo visibility
- Search functionality
- Documentation access

## Maintenance

- Update dependencies regularly
- Check Playwright and Cucumber documentation for latest features
- Maintain page objects when website changes

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed
2. Check browser installation
3. Verify your Node.js version
4. Clear npm cache if needed:
```bash
npm cache clean --force
```

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This project is licensed under the MIT License.
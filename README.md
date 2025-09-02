## Quick Start ⚡

1. **Clone the repository and install dependencies:**

```bash
git clone git@github.com:Lali2412/playwright-tests.git
cd playwright-tests
npm install
npx playwright install


2️⃣ Set Up Environment Variables



Create a `.env` file in the root of your project:

```env
USERNAME=standard_user
PASSWORD=secretsauce
Important: Do NOT commit your .env file to GitHub. It is always included in.gitignore.

3️⃣ Run All Tests & Generate Allure Report


Run All Tests & Generate Allure Report 

To run all tests and automatically generate the Allure report, execute:


npm run test:allure
Screenshots and videos are saved on failure in the allure-results folder.



---

4️⃣ Running Tests Options

Other commands you can use:


# Run all tests without generating the report
npm run test

# Generate and open Allure report from existing results
npm run allure:report

#Run Tests with HTML Reporting
npx playwright test --reporter=html

#Open the HTML Report
npx playwright show-report


---

5️⃣ Features

- This project follows the Page Object Model (POM) design pattern for better maintainability and readability. Each page of the application has its own class that contains locators and methods for interactions.
- Cross-browser testing (Chromium, Firefox, WebKit).
- Parallel test execution for faster results. 
- Screenshots and videos captured on test failure. 
- Allure reporting.
- Environment variable support for credentials.
- JSON file URLs, product details, and checkout information.

6️⃣  Prerequisites 

- Node.js v18+  
- npm or yarn  
- Git  
- (Optional) Allure Commandline



7️⃣ Parallel Test Execution


- Tests run in parallel across files by default.  
- Inside a file, use `test.describe.parallel` to run multiple tests concurrently.


8️⃣ Project Structure

playwright-tests/
├── allure-report/ # Generated Allure HTML report
├── allure-results/ # Allure raw results
├── node_modules/ # Project dependencies
├── pages/ # Page Object Model classes
├── playwright-report/ # Playwright HTML report
│ └── index.html
├── test-results/ # Test result files
├── tests/ # Test files
│ ├── cart.spec.ts
│ ├── checkout.spec.ts
│ ├── login.spec.ts
│ └── sorting.spec.ts
├── utils/
│ └── testData.json # Test data
├── .env # Environment variables
├── .gitignore
├── package-lock.json
├── package.json # Dependencies & scripts
├── playwright.config.ts # Playwright configuration
└── README.md


9️⃣ Git Workflow


```bash
git status
git add <file-or-folder>
git commit -m "Add Product Sorting test case"
git push origin main


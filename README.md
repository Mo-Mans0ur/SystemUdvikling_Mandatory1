# Personal Test Data Generator

The **Personal Test Data Generator** is an application that generates random personal data for testing purposes. It provides functionality to generate a single person or multiple people with various attributes like names, address, CPR, gender, and more.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Running the Application](#running-the-application)
3. [Endpoints](#endpoints)
4. [Testing](#testing)
5. [ESLint Setup](#eslint-setup)
6. [Husky Pre-commit Hook](#husky-pre-commit-hook)
7. [CI Pipeline](#ci-pipeline)
8. [Technologies Used](#technologies-used)

## Project Setup

### Prerequisites
- **Node.js** (v18 or later)
- **MySQL** (v8.0)
- **Git**
- **Java** (v17 or later) for SonarQube
- **SonarQube** (v10.7.0 or later)



### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory:**
   ```bash
   cd personal-test-data-generator
   ```

3. **Install the dependencies:**
   ```bash
    npm install
    ```

4. **setup the database:**
   Inside MySQL, run:
   ```bash
    CREATE DATABASE testdb;
    ```


5. **Seed the database:**
   ```bash
    mysql -u root -p testdb < src/scripts/schema.sql
    mysql -u root -p testdb < src/scripts/seed_data.sql
    ```

6. **SonalQube Setup:**
   install sonarqube-scanner globally 10.7.0 or java 17 or later
   
   extract the sonarqube-scanner.zip file and navigate to the bin/windows-x86-64 directory

   start the sonarqube server by running the command:
   ```bash
   .\StartSonar.bat
   ```

   open the browser and navigate to http://localhost:9000/
   create a new project and generate a token and add the token to the sonar-project.properties file or .env file

   sonar.projectKey=my_project
   sonar.sources=src
   sonar.host.url=http://localhost:9000
   sonar.login=your_token

   ### Running the Application

   start the application by running the command:
   ```bash
   npm start
   ```

   API documentation can be found at http://localhost:3000/api-docs

  ## Endpoints

| Method | Endpoint            | Description                            |
|--------|---------------------|----------------------------------------|
| GET    | `/api/person`        | Get a single randomly generated person |
| GET    | `/api/people/:count` | Get a list of randomly generated people|



## Testing

testing has been set up to include unit tests and integration tests. and end-to-end tests usinng selenium
```bash
npm test
```

Run end-to-end tests using selenium
```bash
npm run test:e2e
```

## ESLint Setup
We use ESLint to maintain code consistency and quality. The ESLint configuration is defined in the `.eslintrc.json` file. To run ESLint, use the following command:
```bash
npm run lint
```

fix the linting issues by running the command:
```bash
npm run lint:fix
```

## Husky Pre-commit Hook
We use Husky to run ESLint before every commit. This ensures that the code is linted and consistent before it is committed. The Husky configuration is defined in the `package.json` file.

install husky by running the command:
```bash
npm install husky --save-dev
```
the pre-commit hook automatically runs the linter and the tests before every commit

## CI Pipeline
The CI pipeline is set up using GitHub Actions. The workflow is defined in the `.github/workflows/main.yml` file. The pipeline runs the tests, linter, and SonarQube analysis on every push to the main branch.

steps in CI pipeline:
1. Run ESLint checks
2. Run unit tests and integration tests
3. Run code coverage checks with SonarQube


## Technologies Used

- **Node.js** - JavaScript runtime
- **MySQL** - Database
- **SonarQube** - Code quality and security analysis
- **Jest** - Testing framework
- **Selenuim** - End-to-end testing
- **ESLint** - Code quality and consistency
- **Husky** - Pre-commit hook Management
- **GitHub Actions** - CI  pipeline


## FAQ

### How do I resolve "MySQL connection error"?
Make sure the MySQL service is running, and you've set up the correct username, password, and database in the `.env` file.

### SonarQube isn't starting, what should I do?
Ensure you are running the compatible version of Java (v17 or later), and check the logs for any additional information.


![Build Status](https://img.shields.io/github/actions/workflow/status/your-repo/main.yml?branch=main)
![Coverage](https://img.shields.io/codecov/c/github/your-repo/your-project)


## Database Configuration
The project uses MySQL. You can configure the database by running the SQL scripts found in `src/scripts/`. Make sure your MySQL service is running before starting the app.

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

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>

2. **Navigate into the project directory:**
   ```bash
   cd personal-test-data-generator

3. **Install the dependencies:**
   ```bash
    npm install

4. **setup the database:**
   ```bash
   Inside MySQL, run:
    CREATE DATABASE testdb;

5. **Seed the database:**
   ```bash
    mysql -u root -p testdb < src/scripts/schema.sql
    mysql -u root -p testdb < src/scripts/seed_data.sql

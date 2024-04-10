# Testing Tutorials

## Notes

### Test Types

1. Unit Tests
2. Integration Tests
3. End-to-End (E2E) Tests -> Puppeteer, Cypress

### Javascript Testing

1. DOM Testing library - core
2. React Testing Library (RTL) - wrapper around core
3. Jest - testing framework

### Add 'jsconfig.json'

* To get intellisense in VS Code
`
{
    "typeAcquisition": {
        "include": [
            "jest",
        ],
    },
}
`

### Disable resetMocks
'package.json'
`
{
  ...,
  "jest": {
    "resetMocks": false
  }
}
`

### ARIA

Accessible Rich Internet Applications

## React Testing Library Tutorial - Net Ninja

### Directory

`React-Testing-Library-Net-Ninja`

Note:
* Run following before `$ yarn start`<br>
`$ export NODE_OPTIONS=--openssl-legacy-provider`

### Initialize

`$ yarn`

### Start

`$ yarn start`

### Chapters

1. Introduction
2. The Importance of Testing
3. Types of Testing
4. Structure of Tests
5. Intro to Query Methods
6. Priority
7. Using Query Methods
8. Assertions
9. Describe Block
10. Fire Events
11. Integration Tests
12. Finding Async Elements with FindBy
13. Mocking Requests
14. Before & After Each

## React Testing Tutorial

`react-testing`

### Create React App

`$ yarn create react-app react-testing --template typescript`

### Start

`$ yarn start`

1. Introduction
2. Jest vs React Testing Library
3. Types of Tests
4. What is a Test?
5. Project Setup
6. Running Tests
7. Anatomy of a Test
8. Your First Test
9. Test Driven Development
10. Jest Watch Mode
11. Filtering Tests
12. Grouping Tests
13. Filename Conventions
14. Code Coverage
15. Assertions
16. What to test?
17. RTL Queries
18. getByRole
19. getByRole Options
20. getByLabelText
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.

53.

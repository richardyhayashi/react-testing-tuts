# Testing Tutorials

## Notes

### Test Types

1. Unit Tests
2. Integration Tests
3. End-to-End (E2E) Tests -> Puppetier, Cypress

### Add 'jsconfig.json'

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

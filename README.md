# Credit Card Checker

A JavaScript program that validates credit card numbers using the Luhn algorithm, identifies invalid credit card numbers within a batch, and determines which credit card companies issued the invalid cards.

## About the Project

This project was created to practice JavaScript fundamentals such as arrays, functions, loops, conditionals, and array methods.

The program works with batches of credit card numbers and uses the Luhn algorithm to determine whether each number is valid. It can then collect invalid cards and identify the companies associated with them.

## Features

- Validates credit card numbers using the Luhn algorithm
- Processes multiple credit card numbers in a batch
- Finds and collects invalid credit card numbers
- Identifies the companies that issued invalid cards
- Prevents duplicate company names from appearing in the results

The program recognizes:

- American Express
- Visa
- Mastercard
- Discover

## How It Works

### `validateCred()`

Checks whether a credit card number is valid using the Luhn algorithm.

The program:

1. Removes the final digit as the check digit.
2. Reverses the remaining digits.
3. Doubles every other digit.
4. Subtracts 9 when a doubled digit is greater than 9.
5. Adds all of the digits together with the check digit.
6. Checks whether the total is divisible by 10.

If the total modulo 10 equals `0`, the credit card number is considered valid.

### `findInvalidCards()`

Takes an array containing multiple credit card numbers and uses `validateCred()` to check each one.

Any invalid credit card numbers are collected and returned in a new array.

### `idInvalidCardCompanies()`

Examines the first digit of each invalid card number to determine its issuing company.

The program identifies:

| Starting Digit | Company |
| --- | --- |
| 3 | American Express |
| 4 | Visa |
| 5 | Mastercard |
| 6 | Discover |

Each company is only added to the result once, even when multiple invalid cards belong to the same issuer.

## Technologies

- JavaScript
- Node.js

## Running the Project

Clone the repository:

git clone https://github.com/ChristinaJSuzuki/Credit-Card-Checker.git

Navigate into the project folder:

cd Credit-Card-Checker

Run the JavaScript file with Node.js:

node main.js

The results will be displayed in the terminal.

## What I Practiced

Through this project, I practiced:

- JavaScript functions
- Arrays and array manipulation
- Loops
- Conditional logic
- The modulo operator
- Working with algorithms
- Breaking a larger problem into reusable functions

## Author

**Christina Suzuki**

GitHub: https://github.com/ChristinaJSuzuki

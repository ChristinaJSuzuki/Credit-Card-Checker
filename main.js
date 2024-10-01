// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

/*
Credit Card Issuer	Starts With ( IIN Range )	Length ( Number of digits )
American Express	  34, 37	                    15
Visa	              4	                            13-16-19
MasterCard	          51, 52, 53, 54, 55, 222100-272099	   16
Discover	6011, 622126 to 622925, 644, 645, 646, 647, 648, 649, 65	16-19 */

function findInvalidCards(cards) {
  let invalidCards = [];
  for (let card of cards) {
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
}
// created new function findInvalidCards that takes one parameter (card)
// new empty array invalidCards to store invalid credit card numbers
// loop through each card in the cards array
// use validateCred function to check if the card is valid
// if the card is invalid, add it to the invalidCards array
// return invalidCards array

function idInvalidCardCompanies(invalidCards) {
  let companies = [];
  for (let card of invalidCards) {
    let firstDigit = card[0];
    if (firstDigit === 3 && !companies.includes("Amex")) {
      companies.push("Amex");
    } else if (firstDigit === 4 && !companies.includes("Visa")) {
      companies.push("Visa");
    } else if (firstDigit === 5 && !companies.includes("Mastercard")) {
      companies.push("Mastercard");
    } else if (firstDigit === 6 && !companies.includes("Discover")) {
      companies.push("Discover");
    } else if (![3, 4, 5, 6].includes(firstDigit)) {
      console.log("Company not found");
    }
  }
  return companies;
}

// created idInvalidCardCompanies function with one parameter (invalidCards)
// created empty array called companies to store companies' names
// loop through each card in invalidCards array
// checked first digit of each card to determine issuing company
// added company if it's not already in the companies array
// returned companies array

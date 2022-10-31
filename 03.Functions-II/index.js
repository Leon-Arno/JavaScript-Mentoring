'use strict';
// * IIFE - Immediately Invoked Function Expression
//   (function () {
//     // function body
//   }
// )();

// * Callback Functions
// * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function accountBalance(balance) {
  return `Your account balance is €${balance}`;
}

function printAccountBalance(callbackFn) {
  const accountBalance = 200000;
  return callbackFn(accountBalance);
}

console.log(printAccountBalance(accountBalance));

// ? Callback Functions in Array Methods

let arrayOfCountries = [
  'Argentina',
  'Bosnia',
  'Chile',
  'Denmark',
  'England',
  'Finland',
  'Guinea',
  'Honduras',
  'Iceland',
  'Jamaica',
];

const filterCountries = (array) => {
  return array.filter((country) => {
    return country.length <= 6;
  });
};

console.log(filterCountries(arrayOfCountries));

{
  // ? Alternative result
  const findCountry = (country) => {
    return country.length <= 6;
  };

  const filterCountries = (array) => {
    return array.filter(findCountry);
  };

  console.log(filterCountries(arrayOfCountries));
}

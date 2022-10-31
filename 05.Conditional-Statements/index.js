'use strict';

// * IF...ELSE
//The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

const alcoholAllowed = (customerAge) => {
  let allowedAge = 16;
  if (customerAge < allowedAge) {
    return `Sorry, you are not of age yet!`;
  } else {
    return `What drink can I get you?`;
  }
};

let functionCall = alcoholAllowed(16);
console.log(functionCall);

// * Conditional (Ternary) Operator

let germanCars = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Porsche'];

const checkForGermanCars = (carName) => {
  return germanCars.includes(carName)
    ? `That's a German car`
    : `That's rubbish`;
};

console.log(checkForGermanCars('Mustang'));
console.log(checkForGermanCars('BMW'));

// * Switch (Switch Case)

const today = new Date().getDay();
console.log(today);

switch (today) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log(`The value is not recognized!`);
}

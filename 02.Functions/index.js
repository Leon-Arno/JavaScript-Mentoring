'use-strict';

// * Function or Routine

// ? Function Declaration
function sayHello(name) {
  return `Hello ${name}!`;
}

console.log('-----Function Declaration-----');
console.log(sayHello('Irina'));
console.log(sayHello('Markus'));

// ? Function Expression

let addTwoNumbers = function (numOne, numTwo) {
  return numOne + numTwo;
};
console.log('\n');
console.log('-----Function Expression-----');
console.log(addTwoNumbers(2, 2));

// ? Arrow Function Expression

// const greeting = (name, city) => {
//   return `Hello ${name}, Welcome to ${city} and I hope are having a great time!`;
// };

// * Implicit Return
const greeting = (name, city) =>
  `Hello ${name}, Welcome to ${city} and I hope are having a great time!`;

console.log('\n');
console.log('-----Arrow Function Expression-----');
console.log(greeting('Boris', 'London'));

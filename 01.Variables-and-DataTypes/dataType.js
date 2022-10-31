'use strict';

// * Data Types
/* 
     1. Primitive Data Types
     2. Structural Data Types
 */

// * Primitive Data Types
console.log('-----Primitive Data Types-----');

// ? String (Text or Textual Data)
let movieName = 'Top Gun: Maverick';
console.log('String:', movieName);

// ? Number - Integer & Float (Decimal)
let integer = 5;
let floatNumber = 9.99;

console.log('Integer:', integer);
console.log('Float:', floatNumber);

// ? BigInt (Extremely large number > 2^53)
let bigNumber = 9294969898909898n;
console.log('BigInt:', bigNumber);

// ? Boolean - True or False
let isDonaldTrumpFemale = false;
let typeCheck = typeof isDonaldTrumpFemale === 'boolean';

console.log('Boolean:', isDonaldTrumpFemale);
console.log('Data Type Check:', typeCheck);

// ? undefined (Non-existent or missing)
let gender = undefined;
console.log('undefined:', gender);

// ? null
let phoneNumber = null;
console.log('null:', phoneNumber);

// ? Symbol

console.log('\n');

// * Structural Data Types or Object
console.log('-----Structural Data Types or Object-----');

// ? Array

let oneDArray = ['BMW', 'Mini', 'Mercedes', 'Porsche', 'Audi'];
let twoDArray = [
  'Volvo',
  ['Mercedes', 'Smart', 'Mercedes Trucks'],
  'Alpha Romeo',
  ['BMW', 'Mini'],
  'General Motors',
];
console.log('---ARRAY---');
console.log('1D Array:', oneDArray);
console.log('2D Array:', twoDArray);

console.table(oneDArray);
console.table(twoDArray);

// ? Getting items from an array
console.log('\n');
console.log('-----Getting items from an array-----');

console.log(oneDArray[2]);
console.log(twoDArray[1][1]);

// ? Objects

const car = {
  manufacturer: 'Porsche',
  model: '911',
  year: 2022,
  color: 'black',
};
console.log('\n');
console.log('---OBJECT---');
console.log('object:', car);
console.table(car);

// ? Getting Items from an object
console.log('-----Getting items from an object-----');

// Dot Notation
console.log(car.manufacturer);

// Bracket Notation
console.log(car['model']);

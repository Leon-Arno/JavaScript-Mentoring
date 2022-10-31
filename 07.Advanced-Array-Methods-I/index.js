'use strict';

// * Arrays
//* Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.

// * Array Instance Properties

// ? Array.length
// Note: This property counts from 1 and not 0

let array = [1, 2, 3, 4, 5];
let arrayLength = array.length;

console.log('-----Array Length Property-----');
console.log(arrayLength);

// * Array Static Methods
console.log('\n');
console.log('-----Array.isArray() Static Method-----');
console.log(arrayLength);
console.log(Array.isArray(array));

// * Array Instance Methods
console.log('\n');
console.log('-----Array Instance Methods-----');

// ! We are using the hobbies array for the methods
let hobbies = [`Coding`, 'Design', 'Reading', 'Star Gazing', 'Bowling'];

// ? includes() - returns a boolean value and is case-sensitive
let doesHobbyInclude = hobbies.includes('Coding');
console.log('includes():', doesHobbyInclude);

// ? indexOf() - returns the index of the value if found and is case-sensitive
let indexOf = hobbies.indexOf('Reading');
console.log('indexOf()', indexOf);

// ? push() - Adds an item to the end of an array
hobbies.push('Car Racing');
console.log('push():', hobbies);

// ? pop() - removes an item to the end of an array
hobbies.pop();
console.log('pop():', hobbies);

// ? unshift() - Adds an item to the end of an array
hobbies.unshift('Car Racing');
console.log('unshift():', hobbies);

// ? shift() - Adds an item to the end of an array
hobbies.shift('Car Racing');
console.log('shift():', hobbies);

// ? some() - returns boolean
let some = hobbies.some((hobby) => hobby.length === 6);
console.log('some():', some);

// ? every() - returns boolean
let every = hobbies.every((hobby) => hobby.length === 6);
console.log('every():', every);

// ? find() - returns first element that checks out to be TRUE and undefined, if no element is found
let find = hobbies.find((hobby) => hobby.length === 7);
console.log('find():', find);

// ? filter() - returns a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
let filter = hobbies.filter((hobby) => hobby.length === 7);
console.log('filter():', filter);

// ? slice() - returns a shallow copy of an array
let sliceOne = hobbies.slice(1);
console.log('slice() with start:', sliceOne);
let sliceTwo = hobbies.slice(1, 4);
console.log('slice() with start and end:', sliceTwo);
let sliceThree = hobbies.slice(-2);
console.log('slice() from behind:', sliceThree);

// ? splice() - returns a shallow copy of an array
let splice = hobbies.splice(1, 0, 'Table Tennis');
console.log('splice() with start:', hobbies);

// ? How to reverse a string

let string = 'stop';
// * Method Chaining
let reverse = string.split('').reverse().join('').replace('p', 'P');
console.log('reverse() & join():', reverse);

// ? forEach() - returns undefined
let arrayOutside = [];
let forEach = hobbies.forEach((hobby) => {
  let updatedItems = `${hobby} 🚀`;
  arrayOutside.push(updatedItems);
});

console.log('forEach():', arrayOutside);

let shoppingBasket = [20.99, 50, 32, 58, 120];

// TODO
// Write a function that accepts an array of numbers and uses a for loop and another a forEach loop to sum the numbers in the given array.

shoppingBasketTotal(shoppingBasket);

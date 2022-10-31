'use strict';

// * while Loop
// * A while statement executes its statements as long as a specified condition evaluates to true.
console.log('-----while Loop-----');
let age = 18;

while (age >= 18) {
  console.log('You are now an adult!');
  break;
}

let n = 0;
let x = 0;
while (n < 10) {
  n++;
  //   console.log(n);
  x += n;
  console.log(x);
}

// * do...while Loop
// * The do...while statement repeats until a specified condition evaluates to false.
console.log('\n');
console.log('-----do...while Loop-----');
let noOfHelloSaid = 0;

do {
  noOfHelloSaid++;
  console.log(noOfHelloSaid);
} while (noOfHelloSaid < 10);

// * for Loop

console.log('\n');
console.log('-----for Loop-----');
// ? Generating a numbers from 1 to 100
for (let number = 1; number <= 100; number++) {
  //   console.log(number);
  console.log(number * 2);
}

// ? Looping through an array

let prices = [9.99, 10, 15, 2.25, 80, 108, 2000, 200];

let accumulator = 0;
for (let i = 0; i < prices.length; i++) {
  //   console.log(prices[i]);
  accumulator += prices[i];
}
console.log('Sum:', accumulator);

// ? Saving prices higher than 20 in a new array

let newArray = [];

for (let i = 0; i < prices.length; i++) {
  //   console.log(prices[i]);
  prices[i] > 20 ? newArray.push(prices[i]) : prices;
}

console.log('New Array:', newArray);

// * for...in Loop

const car = {
  name: 'BMW',
  model: 'M5',
  year: 2023,
  color: 'Ghost Black',
};

console.log(car['name']);

for (const property in car) {
  console.log(property);
  console.log(car[property]);
}

//* for...of Loop

let fruits = ['Banana', 'Orange', 'Kiwi'];

for (const item of fruits) {
  console.log(item);
  //   console.log(fruits[item]);
}

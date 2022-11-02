'use strict';

// * Array Instance Methods
console.log('-----Array Instance Methods-----');

// ? map() - returns new array

let salaries = [42000, 48000, 50000, 65000, 120000];

let salaryIncrease = salaries.map((salary) => {
  let tenPercent = (10 / 100) * salary;
  let increase = salary + tenPercent;
  return increase;
});

console.log('map():', salaryIncrease);

// ? reduce() - returns a single value

let prices = [5, 2.34, 67.89, 4, 8];

const reducer = (previous, next) => {
  return previous + next;
};

let total = prices.reduce(reducer, 0);

console.log('reduce():', total);

// * Array Methods within Functions

// ? Addition

const addition = (...numbers) => {
  let sum = numbers.reduce((prev, next) => {
    return prev + next;
  }, 0);
  return sum;
};

console.log(addition(1, 2, 3, 4, 5));
console.log(addition(1, 2, 3, 10, 20, 30, 40, 50, 60));

// ? filtering data

const data = [
  {
    userName: 'Scooby',
    age: 28,
    location: 'London',
  },
  {
    userName: 'Britney',
    age: 20,
    location: 'London',
  },
  {
    userName: 'Lisa',
    age: 32,
    location: 'Stockholm',
  },
  {
    userName: 'Jerry',
    age: 35,
    location: 'Barcelona',
  },
  {
    userName: 'Tom',
    age: 20,
    location: 'Berlin',
  },
  {
    userName: 'Bob',
    age: 25,
    location: 'New York',
  },
  {
    userName: 'Layla',
    age: 38,
    location: 'Berlin',
  },
];

const filterByLocation = (array, location) => {
  let filterLocation = array.filter((item) => {
    return item.location === location;
  });
  return filterLocation;
};

console.log(filterByLocation(data, 'London'));

// TODO
// Write a function that checks if some() ages are over 30

const sumAges = (array) => {
  let ages = array.map((x) => x.age);
  let sum = ages.reduce((prev, next) => prev + next);
  return sum;
};

console.log(sumAges(data));

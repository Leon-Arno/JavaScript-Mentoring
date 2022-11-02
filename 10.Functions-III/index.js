'use strict';

// * Functions with default parameter values

const raiseCalculator = (currentSalary, increasePercentage = 10) => {
  let raise = (increasePercentage / 100) * currentSalary;
  let newSalary = raise + currentSalary;
  return newSalary;
};

console.log(raiseCalculator(100000, 20));
console.log(raiseCalculator(80000));

const helloCustomer = (name = 'customer', accountBalance = 'loading') => {
  return `Hello ${name}, Your account balance is ${accountBalance}`;
};

console.log(helloCustomer('Tom', 200000));
console.log(helloCustomer());

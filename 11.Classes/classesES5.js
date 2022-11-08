'use strict';

// * ES5 Constructor Function

function CustomerStatic() {
  this.name = 'Rick Ross';
  this.accountType = 'Savings';
  this.accountBalance = '€100.000.000.000';
}

// Instantiation
let customer = new CustomerStatic();
console.log(customer);

function CustomerDynamic(name, accountType, accountBalance) {
  this.name = name;
  this.accountType = accountType;
  this.accountBalance = accountBalance;
}

// ? Adding Instance Methods

CustomerDynamic.prototype.showAccountBalance = function () {
  return `Your account balance is ${this.accountBalance}.`;
};

let customerDynamicOne = new CustomerDynamic(
  'DJ Khaled',
  'Current',
  '€400.000'
);
console.log(customerDynamicOne);
console.log(customerDynamicOne.showAccountBalance());

let customerDynamicTwo = new CustomerDynamic(
  'Irina',
  'Savings',
  '€400.000.000.000.000'
);
console.log(customerDynamicTwo);
console.log(customerDynamicTwo.showAccountBalance());

// ? Instance Check
console.log(
  'Instance Check:',
  customerDynamicOne && customerDynamicTwo instanceof Object
);

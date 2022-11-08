'use strict';

// * ES6 Class

class Customer {
  constructor(customerName, customerAccount, customerBalance) {
    this.name = customerName;
    this.accountType = customerAccount;
    this.accountBalance = customerBalance;
    this.currency = '€ - Euro';
  }

  showAccountBalance() {
    return `Your account balance is ${this.accountBalance}`;
  }

  credit(amount) {
    let newAccountBalance = this.accountBalance + amount;
    this.accountBalance = newAccountBalance;
    return `€${amount} has been credited to your account and your new account balance is ${this.accountBalance}`;
  }

  debit(amount) {
    let newAccountBalance = this.accountBalance - amount;
    this.accountBalance = newAccountBalance;
    return `€${amount} has been debited to your account and your new account balance is ${this.accountBalance}`;
  }
}

// ? Adding a method from outside the class
// Customer.prototype.['methodName'] = function(){}

let customerOne = new Customer('Denzel Washington', 'Savings', 1000000000);
let customerTwo = new Customer('Tom Hardy', 'Current', 500000000);

console.log('Customer 1:', customerOne, '\n', customerOne.showAccountBalance());
console.log('Customer 2:', customerTwo, '\n', customerTwo.showAccountBalance());
console.log('Customer 2:', customerOne, '\n', customerOne.credit(10000));
console.log('Customer 2:', customerTwo, '\n', customerTwo.debit(50000));

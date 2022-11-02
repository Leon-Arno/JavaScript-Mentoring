'use strict';

// * Object

// ? Object constructor
let personObject = new Object();
personObject.name = 'Bob Dylan';
personObject.occupation = 'Singer';

console.log(personObject);

// ? Object Literal

const personObjectTwo = { name: 'Aretha Franklin', occupation: 'singer' };

const customerOne = {
  name: 'Christian Bale',
  address: 'Beverly Street 5',
  postCode: 12345,
  state: 'California',
  accountType: 'Savings',
  assets: ['Cars', 'Apartments', 'Gas Stations'],
  // A method is an object property, whose value is a function.
  showCustomerData: function () {
    return `Hello Mr. Bale,
    Your account type is ${this.accountType}.
    You currently have ${this.assets.length} assets in your portfolio.`;
  },
};
// Destructuring Objects
const { name, accountType, assets } = customerOne;
console.log(name);
console.log(customerOne.showCustomerData());

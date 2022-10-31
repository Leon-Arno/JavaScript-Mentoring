'use strict';

// * Closure

// Outer Function
function initializer() {
  const customer = {
    name: 'Jeff Bezos',
    location: 'Beverly hills',
    accountBalance: '1.000.000.000.000',
  };

  //   Inner Function
  function displayCustomer() {
    return customer.name;
  }
  console.log(displayCustomer());
  //   displayCustomer();

  //   Inner Function
  function showAccountBalance() {
    return customer.accountBalance;
  }
  console.log(showAccountBalance());
  //   showAccountBalance();
}

initializer();

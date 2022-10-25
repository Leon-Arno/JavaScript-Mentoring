'use-strict';

// * Variables

// ? 'var' declaration
console.log('-----VAR-----');
var name = 'Leon';
console.log(name);

// Function scoped
function hideVariable() {
  var car = 'BMW';
}

// ! Returns ReferenceError as 'var' is inside of and is protected by the function scope
// console.log(car);

// Redeclaring 'var' - VAR can be redeclared
var name = 'Scooby Doo';
console.log('Redeclaration:', name);

// Updating 'var' - the value of VAR can be updated
name = 'Tom';
console.log('Updated:', name);

// ? 'let' declaration - ES6
console.log('-----LET-----');
let city = 'Berlin';
console.log(city);

// 'let' & 'const' uses lexical scoping and is blocked scope
//Block scope
{
  let movie = 'Top Gun: Maverick';
}
// ! Returns ReferenceError as 'let' is inside of and is protected by the block scope
// console.log(movie);

//! Redeclaring 'let' - LET cannot be redeclared within the same scope or block
let houseSize = 'small';
// let houseSize = 'big';

// Updating 'const' - the value of LET can be updated
houseSize = 'massive';
console.log('Updated LET:', houseSize);

// ? 'const' declaration - ES6
const gravityExists = true;
console.log(gravityExists);

//! Redeclaring 'const' - CONST cannot be redeclared within the same scope or block
// const gravityExists = false;

//! Updating 'const' - the value of CONST cannot be updated
// gravityExists = false;
// console.log(gravityExists);

// * constants with structural datatypes can have their values modified so long as the original data type is not changed.
const fruits = ['Apple', 'Mango'];
fruits.push('African Star Apple');

console.log(fruits);


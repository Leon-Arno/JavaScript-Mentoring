'use strict';

let cityOne = 'Berlin';
console.log(cityOne);

let cityTwo = cityOne;
console.log(cityTwo);

cityTwo = 'Düsseldorf';
console.log(cityTwo);
console.log(cityOne);

let arrayOne = [1, 2, 3, 4, 5];
console.log(arrayOne);

let arrayTwo = arrayOne;
console.log(arrayTwo);

arrayTwo.push(6);
console.log(arrayTwo);
console.log(arrayOne);

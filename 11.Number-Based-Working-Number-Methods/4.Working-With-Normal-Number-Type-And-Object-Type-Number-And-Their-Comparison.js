// Declaring 'use strict' statement
'use strict';

// Declaring a number in normal way
let number_1 = 5; // number type
let number_2 = new Number(5); // object type number

// Comparing Both Normal Number Type and Object Type Numbers
console.log(number_1 == number_2); // both of their value is equal so 'true'
console.log(number_1 === number_2); // both of their value is equal, but their type is different so 'false'


// Comparing Both Object Type Numbers
let number_3 = new Number(15); // object type number
let number_4 = new Number(15); // object type number

console.log(number_1 == number_2); // both of their value is equal so 'true'
console.log(number_1 === number_2); // both of their value is equal, but both object is different so 'false'


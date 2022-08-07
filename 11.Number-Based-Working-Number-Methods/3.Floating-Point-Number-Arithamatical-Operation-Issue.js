// Declaring 'use strict' statement
'use strict';

// Declaring floating point numbers
let num1 = 0.2;
let num2 = 0.4;
let sum_of_both = num1 + num2; // results 0.5000.... which is not exact value
console.log(sum_of_both);

// To Get The Exact Value Of Floating Additional Operation
sum_of_both = (num1 * 10 + num2 * 10)/10; 
console.log(sum_of_both);
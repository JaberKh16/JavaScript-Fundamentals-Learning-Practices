/*
    Number Method: toExponential(radix_value)
    =========================================
    number.toExponential(radix_value) method is used to returns
    a decimal point number after converting it to exponentials formatted
    number. 

    toExponential() converted number to exponential format which having a type of 
    string type after the conversion also. 

    toExponential() takes a single parameter 'radix_value' which denotes what no. of
    decimal points we want in converted exponential number.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a number type
let number_1 = 50.32345;
number_1 = number_1.toExponential(2); // takes 2 decimal point while converting 
console.log(`number_1 having 2 decimal point: ${number_1}`);

let number_2 = 50326.32323225;
number_2 = number_2.toExponential(7); // takes 7 decimal point while converting 
console.log(`number_2 having 7 decimal point: ${number_2}`);
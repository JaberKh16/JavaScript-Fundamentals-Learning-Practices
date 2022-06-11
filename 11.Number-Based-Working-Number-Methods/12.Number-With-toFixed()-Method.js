/*
    Number Method: toFixed(setted_value)
    ====================================
    number.toFixed(radix_value) method is used to return a string of
    given decimal point number which has been reduced to specified number
    which is setted/fixed by parameter 'setted_value'. 

    toFixed() converted number to fixed value decimal point which having a type of 
    string type after the conversion also. 

    toFixed() takes a single parameter 'setted_value' which denotes what no. of
    decimal points we want to fixed for that number and thus to fixed/reduced the number
    to that fixed point it roundoff the number if needed.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a number type
let number_1 = 50.45345;
number_1 = number_1.toFixed(4); // fixing at 4 decimal point while converting 
console.log(`number_1 having 4 decimal point: ${number_1}`);

let number_2 = 50326.32526225;
number_2 = number_2.toFixed(7); // fixing at 7 decimal point while converting 
console.log(`number_2 having 7 decimal point: ${number_2}`);
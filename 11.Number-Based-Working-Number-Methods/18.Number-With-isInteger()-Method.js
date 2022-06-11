/*
    Number Method: isInteger(number)
    ================================
    Number.isInteger(number) method is used to check whether a number
    has a decimal point in it or not and returns a boolean value 
    based on that. If Having Decimal Point then its not a integer thus return 'true'
    otherwise 'false' 
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a decimal point number type
let number_1 = 5.434;
let isHavingDecimalPoint = Number.isInteger(number_1); // results 'false' though having decimal points in the number
console.log(`Having Decimal Point? : ${isHavingDecimalPoint}`);

// Declaring a integer value number type
let number_2 = 5;
let isHavingDecimalPoint2 = Number.isInteger(number_2); // results 'true' though not having decimal points in the number
console.log(`Having Decimal Point? : ${isHavingDecimalPoint2}`);
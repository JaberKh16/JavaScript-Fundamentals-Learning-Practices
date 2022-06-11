/*
    Number Based Some Properties In JS
    ==================================
    1) Number.MAX_VALUE         ; provides the maximum value in JS
    2) Number.MIN_VALUE         ; provides the minimum value in JS
    3) Number.POSITIVE_INFINITY ; provides the Positive Infinity as value
    4) Number.NEGATIVE_INFINITY ; provides the Negative Infinity as value
    5) Number.NaN ; provides the NaN as value

    All the values provided by the number type properties are basically the
    constant type value.

    Note: Number properties doesn't work with the number type variable thus 
    they store only the constant value, if being working with number type variable
    then it will provide value as 'undefined'.s
*/

// Declaring 'use strict' statement
'use strict';

// Working With Number Properties
console.log(`Max Value: ${Number.MAX_VALUE}`);
console.log(`Min Value: ${Number.MIN_VALUE}`);
console.log(`Positive Infinite Value: ${Number.POSITIVE_INFINITY}`);
console.log(`Negative Infinite Value: ${Number.NEGATIVE_INFINITY}`);
console.log(`NaN Value: ${Number.NaN}`);

// Working With Number Type Variable
let number = 6;
number = number.MAX_VALUE; // results 'undefined' thus not work with the number type variable
/*
    Number Method: Number(any_type_var)
    ===================================
    Number(any_type_var) method is used to convert any type of 
    variable into a number type variable.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a number type
let number_1 = "434";
number_1 = Number(number_1);
console.log(`Converted String Valued Number: ${number_1}`);

// Declaring a date type 
let date = new Date("2020-03-11"); // Date(format: year-month-day), format needs to be followe excatly otherwise results 'NaN'
date = Number(date); // converting the date type to number type result a numeric value in miliseconds
console.log(`Converting Date Object Type To Number Type and Value is: ${date}`);

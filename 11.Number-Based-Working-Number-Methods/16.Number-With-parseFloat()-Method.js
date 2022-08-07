/*
    Number Method: parseFloat(any_type_var)
    =======================================
    number.parseFloat(any_type_var) method is used to converts any type of
    variable into a number type as a whole number as floating point number. 
    
    Note: No roundoff occurs here, only converted to whole number

*/

// Declaring 'use strict' statement
'use strict';

// Checking Some Statements With parseFloat()
console.log(`${parseInt("2.7552")}`); // results 2
console.log(`${parseInt("55.489 97.32")}`); // results 55
console.log(`${parseInt("Hell")}`); // results 'NaN'
console.log(`${parseInt("Hell 55.42")}`); // results 'NaN'
console.log(`${parseInt("20.424 Hell")}`); // results 20
console.log(`${parseInt("20.7552        Hell")}`); // results 20
console.log(`${parseInt("      27           ")}`); // results 27
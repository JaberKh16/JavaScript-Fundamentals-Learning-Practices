/*
    Number Method: isFinite(number)
    ===============================
    Number.isFinite(number) method is used to checks whether a number is
    in (finite range/finite number) or not and returns a boolean value depening on that.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a finite number type variable 
let number_1 = 56;
let isFiniteNumber = Number.isFinite(number_1); // results 'true' though in finite range or finite number
console.log(`Number is Finite?: ${isFiniteNumber}`);


// Declaring a Infinite number type variable
let number_2 = Infinity;
let isFiniteNumber2 = Number.isFinite(number_2); // results 'false' though in infinite range or infinite number
console.log(`Number is Finite?: ${isFiniteNumber2}`);


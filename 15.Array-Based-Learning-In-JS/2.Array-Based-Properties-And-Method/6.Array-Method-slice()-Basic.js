/*
    Array Method: array.slice()
    ===========================
    array.slice() method is used to copy and clone an array to a new array. 

    Note: slice() method doesn't change the original array instead it creates a 
    new shallow copy of the original array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 2, 4, 10, 6];
console.log(numbersList);

// Creating A Shallow Copy Of The Array using slice()
let copyArray = numbersList.slice(); // copy the array and make a shallow copy then store it to assigned variable
console.log(copyArray);

// Checking The Equality Of Those Array
console.log(numbersList === copyArray); // results 'false' though different variable

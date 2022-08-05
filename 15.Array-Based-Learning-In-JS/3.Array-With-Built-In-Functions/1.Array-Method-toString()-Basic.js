/*
    Array With Built-In Function: array.toString()
    ==============================================
    array.toString() method is used to convert the array to an 
    string type. What this method basically does is this it totally
    unwrapped the array and converted it to string type.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// Converting The Array To String Type
let arrayToString = numbersList.toString(); // this will flattend/unwrapped the array and converted it to string type
console.log(arrayToString);
console.log(typeof arrayToString);
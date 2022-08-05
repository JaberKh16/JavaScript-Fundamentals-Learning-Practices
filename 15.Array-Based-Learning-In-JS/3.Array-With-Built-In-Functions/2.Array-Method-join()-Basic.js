/*
    Array With Built-In Function: array.join(separator)
    ===================================================
    array.join(separator) method is used to join any type of mulitiple values 
    into an array.
    
    join() takes a single parameter 'separator' which denotes how to join the 
    elements where the join will be done through the specified separator while joining.

    separator can be anything like -  comma(,), semicolon(;), Pipe(|) ...  etc
    If no separator specified then default separator will be taken which is comma(,).

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

// Joing The Array 
let joinedArray = numbersList.join("|"); // this will join the array with specified separator "|"
console.log(joinedArray);
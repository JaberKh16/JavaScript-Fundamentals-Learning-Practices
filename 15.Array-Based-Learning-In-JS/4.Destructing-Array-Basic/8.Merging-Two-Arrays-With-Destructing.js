/*
    Practice-2: Merging Two Arrays Using Array Destruction
*/

// Declaring 'use strict' statement
'use strict';

// Declaring two arrays
let array1 = [1, 2, 4, 5, 6];
let array2 = [10, 20, 30, 40, 55];
console.log(`Array1: ${array1}, ,Array2: ${array2}`);


// Merging Both Arrays and Assign To New Variable
const mergedArray = [...array1, ...array2];
console.log(`Merge Array Contains: ${mergedArray}`);
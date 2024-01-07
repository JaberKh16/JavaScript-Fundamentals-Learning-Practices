/*
    Practice-1: Swapping Example Of Array Destruction
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let value1 = 5, value2 = 10;
console.log(`Before Swapping Values are: ${value1}, ${value2}`);

// Swapping Both Variables With Array Destruction
[value1, value2] = [value2, value1];
console.log(`After Swapping Values are: ${value1}, ${value2}`);

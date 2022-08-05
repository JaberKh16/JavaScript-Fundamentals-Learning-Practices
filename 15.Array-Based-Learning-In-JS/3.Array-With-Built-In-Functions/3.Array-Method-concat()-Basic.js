/*
    Array With Built-In Function: array.concat(arr1, arr2, ...)
    ===========================================================
    The concat() function merges one or more arrays and returns a merged array. 
    It is an immutable method. This means it doesn't change (mutate) the
    existing arrays.

    concat() can take multiple parameters but takes a single parameter atleast to 
    denote what to be concated or merge with the existing array. Now it can be a value
    or array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList1 = [1, 2, 4, 5];
let numbersList2 = [10, 20, 40, 50];

// Merging Both Arrays Using concat() Function
let mergedNumbersList = numbersList1.concat(numbersList2);
console.log(mergedNumbersList);


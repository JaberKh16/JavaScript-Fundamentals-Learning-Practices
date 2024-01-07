/*
    Checking Whether An Array Is An Array Or Not
    ============================================
    Array.isArray(value) function is introduce by ES6 which is used get 
    the type of a value means it determine whether if a value is 
    an array or not and resulted as boolean value.

    isArray() takes a single parameter 'value' which can be any type of variable
    such as - string, number, object, array etc.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array 
let arr = [1, 2, 4, 5, "this", 'a', true];
console.log(arr); // printing the array

// Checking Whether Its An Array Or Not using Array.isArray(array_name)
let isArrayOrNot = Array.isArray(arr);
console.log(isArrayOrNot);

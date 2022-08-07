/*
    Array Based Basic In JS
    =======================
    In JS, Array is basically a list of elements which can be
    either homegeneous type or non-homogeneous type also. Array
    is basically used to store multiple values at a time.
    
    In JS, array can be access through an index where the index value
    starts from 0.

    Array can be created using two ways in JS which are the following:
    1) using subscript []   ===> let arr = [];
    2) using keyword 'new'  ===> let arr = new Array();
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array using subscript []
let numbersList = [1, 2, 4, 5, 6, 8, 9, 0];
console.log(`Array Elements are: ${numbersList}`);

// Taking an specific element from the array
console.log(`4th element is: ${numbersList[3]}`);
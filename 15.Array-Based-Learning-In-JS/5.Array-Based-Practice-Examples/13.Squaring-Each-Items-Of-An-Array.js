/*
    Question-13. Squaring each number in an array.

    Hint- use arr.map(callback)
*/


// defining the 'use strict' statement
'use strict';

// defining the arrays
const itemsArray = [1, 3, 6, 7, 2, 4, 9];


// return a new array with each item squared
const numbersArraySquared = function(arr) {
    return arr.map((value)=>{
        return Math.pow(value, 2);
    });
}

console.log(numbersArraySquared(itemsArray));
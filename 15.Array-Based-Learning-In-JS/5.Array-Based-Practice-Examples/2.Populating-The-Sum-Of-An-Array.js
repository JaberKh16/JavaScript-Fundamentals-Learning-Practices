/*
    Question-2. Populating the sum of an array.

    Hint- use arr.reduce() function
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];

// defining a function to extract the sum value from an array
const sumOfArray = function(arr) {
    // cummulator is 'a' and current is 'b' , and initial value is setted to 0 
    return arr.reduce((a, b)=> a + b, 0);
};

console.log(sumOfArray(itemsArray));



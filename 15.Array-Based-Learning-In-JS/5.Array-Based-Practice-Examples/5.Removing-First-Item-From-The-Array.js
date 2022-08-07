/*
    Question-5. Removing First Item From The Array

    Hint- use arr.shift() to remove the fast item which returns removed item

*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// defining a function 
const removeFirstItem = function(arr){
    return arr.shift(); // returns the value of the removed item
}

console.log(removeFirstItem(itemsArray));



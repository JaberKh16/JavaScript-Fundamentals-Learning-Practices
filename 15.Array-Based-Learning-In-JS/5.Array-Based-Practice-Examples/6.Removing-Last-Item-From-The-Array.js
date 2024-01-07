/*
    Question-6. Removing Last Item From The Array

    Hint- use arr.pop() to remove the last item and returns removed item
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// defining a function 
const removeLastItem = function(arr){
    return arr.pop(); // returns the value of the removed item
}

console.log(removeLastItem(itemsArray));



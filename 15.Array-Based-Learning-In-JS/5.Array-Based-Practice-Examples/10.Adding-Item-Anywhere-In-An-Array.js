/*
    Question-10. Adding an item anywhere in an array.

    Hint- use arr.splice(start, deleteCount, item1, item2, ...itemN) 
*/

// defining the 'use strict' statement
'use strict';

// defining the arrays
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// Inserts an element in the original array
const insertItem = function(arr, item=40, index=5) {
    arr.splice(index, 0, item); // inserting item 40 at index 5 
    return arr;
}

console.log(insertItem(itemsArray));



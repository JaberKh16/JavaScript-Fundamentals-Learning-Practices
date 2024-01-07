/*
    Question-1. Determining the location of an item in an array.
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];

// defining a function to extract the index value of an item
const itemIndexValue = function(arr, item) {
    return arr.indexOf(item);
};

const thirdthIndeValue = (arr, item) =>{
    return arr.indexOf(item);
}

console.log(itemIndexValue(itemsArray, 6));
console.log(itemIndexValue(itemsArray, 2));



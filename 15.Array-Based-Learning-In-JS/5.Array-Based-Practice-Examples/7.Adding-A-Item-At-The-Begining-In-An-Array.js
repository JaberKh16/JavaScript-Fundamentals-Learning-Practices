/*
    Question-7. Adding A Item At The Beginnig Of An Array

    Hint- use arr.unshift() appends at the begining and returns new length
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// defining a function 
const addingItemAtBeginning = function(arr, item){
    arr.unshift(item); // add the item and returns its new length
    return arr;
}

console.log(addingItemAtBeginning(itemsArray, 7));



/*
    Question-5. Adding A Item At The Ending Of An Array

    Hint- use arr.push() appends at the ending and returns new length
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// defining a function 
const addingItemAtEnd = function(arr, item){
    arr.push(item); // add the item and returns its new length
    return arr;
}

console.log(addingItemAtEnd(itemsArray, 7));



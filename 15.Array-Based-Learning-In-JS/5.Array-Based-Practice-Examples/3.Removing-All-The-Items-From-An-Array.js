/*
    Question-3. Returning a new array after removing all instances of a 
                value from an array.

    Hint- use arr.splice() method
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];
const itemsArray2 = [2, 432, 16, 12, 68, 34, 91, 12];


// Way-1
// defining a function to delete all elements from the array
const removedAllItems = function(arr, start=0, deleteCount) {
    return arr.splice(start, deleteCount);
};
console.log(removedAllItems(itemsArray, itemsArray.length));
console.log(removedAllItems(itemsArray2, itemsArray2.length));


// Way-2
const removedAllItems2 = (arr)=>{
    // if array has some items
    while(arr.length > 0){
        arr.pop(); // poping items while the array has some items
    }
    return arr;
}
console.log(removedAllItems2(itemsArray));



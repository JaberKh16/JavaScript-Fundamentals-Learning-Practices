/*
    Question-9. Joining Multiple Arrays(Merge Two Arrays)

    Hint- use arr.concat(anotherArray) or spread(...) operator technique
*/

// defining the 'use strict' statement
'use strict';

// defining the arrays
const itemsArray1 = [1, 43, 6, 32, 78, 34, 9];
const itemsArray2 = [10, 4, 60, 2];


// defining a function 
const mergingArrays = function(arr1, arr2, arr3){
    const mergedArray = arr1.concat(arr2, arr3);
    return mergedArray;
}
console.log(mergingArrays(itemsArray1, itemsArray2, [400, 500]));




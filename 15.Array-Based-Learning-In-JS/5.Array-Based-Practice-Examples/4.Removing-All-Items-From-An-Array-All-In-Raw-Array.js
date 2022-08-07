/*
    Question-4. Removing all instances of a value from an array 
                (modify the original array).

    Hint- use arr.splice() method
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 78, 34, 9];


// Way-1
// defining a function to delete all elements from the array
const removedAllItems2 = (arr)=>{
    while(arr.length > 0){
        arr.pop(); // poping items while the array has some items
    }
    return arr;
}
console.log(removedAllItems2(itemsArray));



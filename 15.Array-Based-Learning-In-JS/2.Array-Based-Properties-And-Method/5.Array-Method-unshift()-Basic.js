/*
    Array Method: array.unshift(element)
    ====================================
    array.unshift(element) method is used to include/add element inside
    the array. It adds the specified element at the beginning of the array.
    
    array.unshift(element) takes a single parameter 'element' which denotes
    what element needs to be added at the beginning of the array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// Adding a element
console.log(`Added Item is: ${numbersList.unshift(10)}`);
console.log(numbersList);


// Adding a element and assign it to a variable
let addedItem = numbersList.unshift(100); // store the length of the array with new item added
console.log(addedItem); // results the length of the newly item included array
console.log(`Length is: ${addedItem.length}`);

/*
    Array Method: array.push(element)
    =================================
    array.push(element) method is used push a single element 
    at the end of the array.

    array.push() does take single parameter 'element' which denotes
    the element needs to add at the end of the array.

    If you assign this push() operation into a variable then it will store
    the length of newly pushed element array to that assigned variable.
        let newlyAddedElementLength = array.push(element); // store the length of newly item included array
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [2, 3, 5, 7, 3, 7];
console.log(`Before the push() operation: ${numbersList}`);
console.log(`Length is: ${numbersList.length}`);


// Pusg A Single Item From The Array
console.log(numbersList.push(56));
console.log(`After the push() operation: ${numbersList}`);
console.log(`Length is: ${numbersList.length}`);


// Push A Single Item And Assign It Into A Variable
let newlyAddedElementLength = numbersList.push(65); // store the popped item into the variable
console.log(`After Push Length is: ${newlyAddedElementLength}`);
console.log(`Length is: ${numbersList.length}`); // match with declared array length, will find its similar
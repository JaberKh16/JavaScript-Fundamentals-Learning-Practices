/* 
    Assignment Operations With Array
    ================================
    In JS, though every variable is dynamic so in the case for array too.
    Such scenarios can be look while performing assigment operation on
    array which are the following:
    
    1)  let arr = [1, 2, 3, 4]; // 4 items having index 0 to 3
        arr[4] = 5; // created an extra items and assigned to the index 4
    
    2)  let arr = [1, 2, 4]; // 3 items having index 0 to 2
        arr[1] = "this"; // index 1 value will be replace with string type 'this'
    
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let arr = [1, 2, 4, 5, 7, 9];
console.log(arr); // printing the array

// Assignment Operation - replacement with different type
arr[3] = 'this'; // replacing index 3 value with string type 'this'
console.log(arr); // printing the array again

// Assignment Operation - include items out of index current array has
arr[7] = 18; // including new item at index 7
console.log(arr); // printing the array again
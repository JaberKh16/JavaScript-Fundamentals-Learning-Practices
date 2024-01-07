/*
    Array Method: array.pop()
    =========================
    array.pop() method is used pop out a single element from the array. 
    It pops the element from at the end of the array.

    array.pop() doesn't take any parameter and pops out the last element.

    If you assign this pop() operation into a variable then it will store
    the popped item into that variable as a value.

        let poppedItem = array.pop(); // store the popped item
        
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [2, 3, 5, 7, 3, 7];
console.log(`Before the pop() operation: ${numbersList}`);

// Pop A Single Item From The Array
console.log(numbersList.pop());
console.log(`After the pop() operation: ${numbersList}`);

// Pop A Single Item And Assign It Into A Variable
let poppedItem = numbersList.pop(); // store the popped item into the variable
console.log(`Popped Item is: ${poppedItem}`);
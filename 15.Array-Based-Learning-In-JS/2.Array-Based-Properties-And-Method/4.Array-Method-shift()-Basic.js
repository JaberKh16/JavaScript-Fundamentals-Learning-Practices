/*
    Array Method: array.shift()
    ===========================
    array.shift() method is used to pop item at the beginning of the
    array and like the pop() method it returns the removed element and
    changes the original array.

    array.shift() doesn't take any parameter but does remove a single item 
    from the beginning of the array.

    If you assign this shift() operation into a variable then it will store
    the popped item into that variable.

        let poppedItem = array.shift(); // store the popped item
        
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [2, 3, 5, 7, 3, 7];
console.log(`Before the shift() operation: ${numbersList}`);

// Pop A Single Item From The Array
console.log(numbersList.shift()); // pop a item from the beginning of the array
console.log(`After the shift() operation: ${numbersList}`);

// Pop A Single Item And Assign It Into A Variable
let poppedItem = numbersList.shift(); // store the popped item into the variable
console.log(`Popped Item is: ${poppedItem}`);
/*
    Skipping A Value Using Array Destruction
    =========================================
    With Array Destruction, skipping a value or multiples values skipping can be possible. 
    To skipping an array element to map to a variable and to skip a variable use
    space means put the variable place empty.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let [cat, , dog, cattle, , mouse] = ['cat', 'rabbit', 'dog', 'cattle', 'elephant', 'mouse'];

// Printing the available variable
console.log(`${cat}, ${dog}, ${cattle}, ${mouse}`);
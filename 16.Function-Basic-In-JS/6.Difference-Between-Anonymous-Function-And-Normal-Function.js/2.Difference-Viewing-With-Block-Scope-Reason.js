/*
    Difference Of Block Scope 
*/

// Declaring 'use strict' statement
'use strict';

// Example With Declaration Function
const bool = false;
if (bool == true){
    function someValue(value =15){
        console.log(value);
    }
}
someValue(); // resulted 'ReferenceError: value is not defined' though being called outside the block


// Example With Anonymous Function
const value = 10;
let someValue2; // having global scope 
if (value == 10){
    someValue2 = function(value = 20){
        console.log(value);
    }
}
someValue2(); // resulted function is being called succesfully though anonymous assigned variable has global scope
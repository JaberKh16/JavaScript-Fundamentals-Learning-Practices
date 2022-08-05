/*
    Array Method: array.includes()
    ==============================
    array.includes() method is used to determine the presence of 
    an element in an array if the element is found in array then 
    returns a boolean value. If found then returns 'true', 
    otherwise returns 'false'.

    Syntax:
        includes(value)
    
    includes() takes atleast a single parameter 'value' to check whether
    the specified 'value' have any presence in the array or not.
    
    includes() method doesn't change the original array.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let names = ['titu', 'jack', 'alex', 'john'];

// Check For The Presence Using includes()
let havePresence = names.includes('john'); // resulted 'true' though have presence in the array
console.log(`Specified \'john\' is present or not?: ${havePresence}`);

let haveNoPresence = names.includes('JK');
console.log(`Specified \'JK\' is present or not?: ${haveNoPresence}`);

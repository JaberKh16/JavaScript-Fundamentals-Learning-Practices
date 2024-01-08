/*
    Array Method: array.of() 
    ========================
    array.of() method is used to create an array with the passes arguments.
    
    Syntax:
        i)  Array.of(arg1, arg2, ,,, argN)
        

    Arrya.of() generally takes multiple arguments and builds an array with those arguments
    passed.
    
    Array.of() doesn't change the original array so no mutable method.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let arrayItems = Array.of('red', 'blue', 'black', 'green', {name: 'JK', pass: '1213'}, [32, 5, 5]);
console.log(arrayItems);
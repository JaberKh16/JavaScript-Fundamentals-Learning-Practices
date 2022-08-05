/*
    Checking Array Identity Using Different Built-In Operators
    ==========================================================
    
    1) 'typeof' is used to get any variable type
        Syntax:     typeof array_name;

    2) 'instanceof' is used to get the instance type of any variable
        this operator introduced by ES6 to check whether any type is
        array or not and resulted as boolean value.
        Syntax:     array_name instance Array;    
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let arr = [1, 2, 4, 56];

// Checking Whether Its An Array Or Not using 'typeof'
console.log(typeof arr); // resulted 'object' though it shouldn't be the case

// Checking Whether Its An Array Or Not using 'instanceof'
console.log(arr instanceof Array); // resulted 'true' though its an array 
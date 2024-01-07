/*
    Destructing A Nested Array
    ==========================
    Destructing a nested array can be possibke with array
    destruction technique.
    
    To destruct an a nested array use the following syntax,
        [,,var_name, [,, var_name]] = [,,value,[,, value]]

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a nested array
let fruits = ['apple','pine-apple','banana',['guava','jack-fruit','olive']];
console.log(`Nested Array Elements are: ${fruits}`);

// Destructing the nested array
let [,,,[,jackFruit,guava]] = ['apple','pine-apple','banana',['guava','jack-fruit','olive']];
console.log(`After Destruction accessing: ${jackFruit}, ${guava}`);

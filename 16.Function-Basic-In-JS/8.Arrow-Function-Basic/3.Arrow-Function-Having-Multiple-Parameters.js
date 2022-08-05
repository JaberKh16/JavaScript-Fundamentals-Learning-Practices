/*
    Arrow Function With Single Parameter
    ====================================
    Syntax: 
        (var_name1, var_name2) =>{

    }; 
*/

// Declaring 'use strict' statement
'use strict';

// Declaring Arrow Function
let swapNumbers = (num1, num2) =>{
    console.log(`Before Swapping: ${num1}, ${num2}`);
    [num1, num2] = [num2, num1];
    console.log(`After Swapping: ${num1}, ${num2}`);
};

// Calling The Function
swapNumbers(5, 3);
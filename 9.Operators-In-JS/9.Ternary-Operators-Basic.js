/*
    Ternary Operator In JS
    ======================
    Ternary Operator is used to assign a value to a variable based on a 
    comparison mode. Ternary Operator is also being called conditional 
    based operator. 
    General Syntax:

        var_name = (comparison) ? value1 : value2
*/

// Declaring 'use strict' statement
'use strict';

// Performing A Ternary Based Operation
let age = prompt("What is your age?");
let confirmAge;
confirmAge = (age <= 18) ? "Child" : "Adult";
console.log("Your type is: " + confirmAge);
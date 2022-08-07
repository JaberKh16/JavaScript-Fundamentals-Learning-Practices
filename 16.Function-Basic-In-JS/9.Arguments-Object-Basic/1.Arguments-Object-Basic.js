/*
    Arguments Objects Concept
    =========================
    Arguments Objects generally used to hold multiple values as
    a object while passing multiple parameters through a function
    as single a parameter which is basically a object.

    Syntax:
        function functionName(){
            for(let i =0; i<arguments.length; i++)
            {
                arguments[i];
            }
        };

    To access the arguments objects use the following:
                
            arguments.length  ; to get the all values though take multiple values as object
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function valuesList(){
    let summation = 0;
    for(let i=0; i<arguments.length; i++)
    {
        summation += arguments[i];
    }
    console.log(`Sum Value is: ${summation}`);
};

// Create a variable with multiple values
let values = valuesList(2, 3, 4, 5, 10, 11, 12, 15, 16, 20, 25, 50, 30, 13, 16, 24);

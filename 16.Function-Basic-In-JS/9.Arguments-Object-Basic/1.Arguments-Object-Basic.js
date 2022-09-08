/*
    Arguments Objects Concept
    =========================
    Arguments Objects generally used to hold multiple values as an object while passing 
    multiple parameters to a function as single a parameter which is basically a object.

    So, basically when need to pass multipl no. of arguments as parameters to the function
    where the issue is that- don't know the exact no. of arguments need to be passed that
    when 'arguments' object comes to play.

    'arguments' objects is an array like having two values which are the following-
        1) Callee Function --> holds the reference of the function
        2) Symbol Function 


    Syntax:
        function functionName(){
            for(let i =0; i<arguments.length; i++){
                arguments[i];
            }
        };
    

    'arguments' is seems like array, but it is not an actual array which can be checked 
    through the following code-
        
            console.log(arguments instanceof Array); // retunrs 'false'


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
    console.log(arguments); // to see the arguments array-like object
};

// Create a variable with multiple values
let values = valuesList(2, 3, 4, 5, 10, 11, 12, 15, 16, 20, 25, 50, 30, 13, 16, 24);

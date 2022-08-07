/*
    Recursive Function Concept
    ========================== 
    Recursive Function are those function which call itself to 
    perform some work. 
    Recursive has two parts which are the following:
        1) base_case        ; used to stop the recursive call
        2) recursive_case   ; used to perform the recursive call

    Syntax:
        function functionName(){
            if (base_case){
                // to stop the recursive
            }
            else{
                //recursive case
            }
        };
*/

// Declaring 'use strict' statement
'use strict';

// Declaring Recursive Function
function findSummationOfNaturalNumbers(number){
    // Base Case
    if (number ==1){
        return number;
    }
    // Recursive Case
    else{
        return number + findSummationOfNaturalNumbers(number-1);
    }
};

// Calling The Function
let number = prompt("Enter the number: ");
console.log(findSummationOfNaturalNumbers(number));
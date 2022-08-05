/*
    Function With Empty Return or Return Undefined
    ==============================================
    In JS, From function if empty return is being specified
    then it is basically considering returning nothing which 
    is 'undefined' while printing the function with 
    console.log(functionName()). Also, can pass a value of 
    'undefined' with the function return statement which 
    results similar like passsing empty return statement.
    For Example:
        function FunctionName(){
            return; // resulted as 'undefined'
            return undefined; // resulted as 'undefined'
        }
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
let magicNumber = 45;
function magicNumberValue(n1, n2, n3=45) {
    if (Number(n1) == Number(n2) && Number(n2) == Number(n3)){
        return magicNumber;
    }
    else{
        return;
    }
}

// Calling The Function
let number1 = prompt("Enter the First Number: ");
let number2 = prompt("Enter the Second Number: ");
console.log(magicNumberValue(number1, number2));
/*
    Default Parameters Working With Function
    ========================================
    In JS, Default Parameters are nothing but those parameters
    which have presetted value(default) while passing the  
    parameters in function definiton.

    Note: While setting values for default parameters must set the
    last parameter as default parameter if previous one's doesn't have
    any default value setted, otherwise it will occur an error.
    
    For Example:
        // Invalid Function Definiton
        function addNumbers(n1, n2=5, n3){

        }

        // Valid Function Definition
        function addNumbers(n1, n2, n3=5){

        }
    
    Default Value can be a function returned value also, For Example:
    function addNum(n1, n2=mulNum()){

    }
    function mulNum(n1 =10, n2=5){
        return n1 * n2;
    }
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function additionOperation(n1, n2=10, n3 = 5) {
    let summationValue = n1 + n2 + n3;
    console.log(`Summation Value is: ${summationValue}`);
}

// Calling The Function
let number1 = 5, number2 = 15, number3 = 25;
additionOperation(number1); // pass a single value which has no default value
additionOperation(number1, number2); // passing 'number2' will preset the value of the default paramter 'n2'
additionOperation(number1, number2, number3); // passing 'number2' and 'number3' will preset the values of the default paramters 'n2' and 'n3'


// Default Parameters Having A Function Returned Value
function additionOperation(n1, n2=multiplicationOperation(10)){
    let summationValue = n1 + n2;
    console.log(`Summation Value is: ${summationValue}`);
} 

function multiplicationOperation(n1=5, n2=5) {
    let multiplicationValue = n1 * n2;
    console.log(`Returned Value From multiplicationOperation(): ${multiplicationValue}`)
    return multiplicationValue;    
}

// Calling The Function
additionOperation(10);
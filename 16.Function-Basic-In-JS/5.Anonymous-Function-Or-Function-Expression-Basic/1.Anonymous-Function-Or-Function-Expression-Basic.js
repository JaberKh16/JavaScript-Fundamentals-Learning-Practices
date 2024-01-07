/*
    Function Expression/Anonymous Function
    ======================================
    Anonymous Functions are those function which doesn't have its function name.
    
    
    For Example:

        let varName = function(var = 10){

                    };
*/

// Declaring 'use strict' statement
'use strict';

// Declaring An Anonymous Function
let sumValue = function(num1, num2){
    let summationValue = num1 + num2;
    console.log(summationValue);
};

// Calling The function
console.log(sumValue); // resulted the function itself as string type
sumValue(5, 10); // resulted the summation value which is 15
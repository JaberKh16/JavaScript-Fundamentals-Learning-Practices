/*
    Assigning Anonymous Function To A Variable
*/

// Declaring 'use strict' statement
'use strict';

// Declaring An Anonymous Function
let sumValue = function(num1, num2){
    let summationValue = num1 + num2;
    console.log(summationValue);
};

let sumValue2 = sumValue; // assigning the function defintion of anonymous function
console.log(sumValue2); // resulted the function defintion as string type
sumValue2(5, 10); // resulted the summation value which is 15
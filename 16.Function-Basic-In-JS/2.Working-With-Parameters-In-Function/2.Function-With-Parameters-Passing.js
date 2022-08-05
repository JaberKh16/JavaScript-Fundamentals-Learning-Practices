/*
    Function Having Parameters
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function addTwoNumbers(num1, num2){
    let summationValue = num1 + num2;
    console.log(`Sum Value is: ${summationValue}`);
}

// Calling The Function
console.log(addTwoNumbers); // this will result the whole function definiton as string type
console.log(addTwoNumbers()); // this will result 'NaN' though function expecting two paramters
addTwoNumbers(5, 10); // this will result the summation value which is 15
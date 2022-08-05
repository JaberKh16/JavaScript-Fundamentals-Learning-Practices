/*
    Function Arguments With 'spread' Operator
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function Which Can Take Multiple Values
function addNumbers(num1, num2, num3, num4) {
    let summationValue = num1 + num2 + num3 + num4;
    return summationValue;
}

// Creating An Array
let valuesList = [12, 3, 4, 10];
console.log(addNumbers(...valuesList)); // passing the array with 'spread' Operator to unwrap the values and pass as individual numbers

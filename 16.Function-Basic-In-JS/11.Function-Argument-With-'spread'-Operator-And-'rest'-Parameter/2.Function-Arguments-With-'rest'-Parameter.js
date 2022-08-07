/*
    Function Arguments With 'rest' Parameter
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function Which Can Take Multiple Values
function addNumbers(num1, num2, ...valuesList) {
    let summationValue = num1 + num2;
    for(let i of valuesList)
    {
        console.log(...valuesList);
        summationValue +=i;
    }
    return summationValue;
}

// Creating An Array
let valuesList = [12, 3, 4, 10, 12, 15, 20, 21, 26, 24, 13, 14];
console.log(addNumbers(...valuesList)); // passing the array with 'spread' Operator to unwrap the values and pass as individual numbers

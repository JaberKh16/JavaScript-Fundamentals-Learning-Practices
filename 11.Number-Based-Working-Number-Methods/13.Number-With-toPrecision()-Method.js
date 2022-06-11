/*
    Number Method: toPrecision(specified_length)
    ============================================
    number.toPrecision(specified_length) method is used to return
    a string number written in a specified length or say limits the
    converted number to that specified length which is denoted by
    the parameter 'specified_length'.

    toPrecision() limits the number to specified length value 
    which also having a type of string type after the limiting done. 

    toPrecision() takes a single parameter 'specified' which denotes at what 
    length/precision we want to fix for that number and thus to fixed/limit the number
    roundoff occurs if needed.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a number type variable
let number_1 = 50.5725523768;
number_1 = number_1.toPrecision(2); // results 51 after rounding
console.log(`Precision Setted Up To Length 2: ${number_1}`);

let number_2 = 50.2732242563;
number_2 = number_2.toPrecision(2); // results 50 no rounding occurs
console.log(`Precision Setted Up To Length 2: ${number_2}`);


let number_3 = 50.2732242563;
number_3 = number_3.toPrecision(9); // results 50.2732243 rounding occurs
console.log(`Precision Setted Up To Length 9: ${number_3}`);


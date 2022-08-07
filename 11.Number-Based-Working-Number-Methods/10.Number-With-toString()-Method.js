/*
    Number Method: toString(base_number)
    ====================================
    number.toString(base_number) method is used to convert a number type
    or string valued number type to a number conversion format value.
    
    toString() converted number conversion format is having a type of 
    string type after the number conversion. 

    toString() takes a single parameter 'base_number' which denotes what
    base to convert when conversion happens.

    Some Conversion Base Value are the following:
        1) base_number = 10;    // to convert to decimal number conversion
        2) base_number = 8;     // to convert to octal number conversion
        3) base_number = 2;     // to convert to binary number conversion
        4) base_number = 16;    // to convert to hexadecimal number conversion
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a number type variable
let number = 12;
let number_1 = number.toString(10); // to convert to decimal conversion
let number_2 = number.toString(16); // to convert to hexadecimal conversion
let number_3 = number.toString(8); // to convert to octal conversion
let number_4 = number.toString(2); // to convert to binary conversion

// printing all conversion numbers
console.log(`number = ${number}
            number_1 = ${number_1}
            number_2 = ${number_2}
            number_3 = ${number_3}
            number_4 = ${number_4}`);

// checking the type
console.log(`Type Of The Converted Number is: ${typeof number_2}`);
/*
    Number Method: isNaN(number)
    ============================
    isNaN(number) is used to check for whether a number is
    'NaN' type or not and return a boolean value either 'true' and 'false'.
*/

// Declaring 'use strict' statement
'use strict';


// Performing a string type with number type operation
let mix_text = "some" * 4; // results 'NaN'
console.log(`${isNaN(mix_text)}`); //result 'true' though 'NaN'
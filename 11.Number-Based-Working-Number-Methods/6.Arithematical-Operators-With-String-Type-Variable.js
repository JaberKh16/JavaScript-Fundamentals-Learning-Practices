// Declaring 'use strict' statement
'use strict';

// Checking Some Arithmatical Operation With String Type
console.log(`2 * some : ${ 2 * "some"}`); // results 'NaN'

// Declaring a variable mix of number type and string multiplied
let number_1 = 3 * "some"; // results 'NaN'
let number_2 = 5; // number type
let conct_nums = number_1 + number_2; // results 'NaN' + 5 which also results 'NaN'
console.log(`3 * "some" + 5 :${conct_nums}`);

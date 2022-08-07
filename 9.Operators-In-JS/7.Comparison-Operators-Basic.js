// Declaring 'use strict' statement
'use strict';

// Performing Some Comparison with numeric type variables
console.log( 5 > 6); // resulted 'false'
console.log( 5 >= 6); // resulted 'false'
console.log( 5 < 6); // resulted 'true'
console.log( 5 <= 6); // resulted 'true'

// Equality Based Operators 
console.log( 4 == 4); // resulted 'true' thus it checks for equality in value, but not type
console.log(4 == "4"); // resulted 'true' thus only checks for the value which is equal
console.log( 5 === "5"); // resulted 'false' thus it checks for equality in value as well as type 

// Non Equality Operators
console.log(4 != 4); // resulted 'false' thus it checks for the non-equality in value, but not type
console.log(4 != "4"); // resulted 'false' thus only checks for the value which is equal and the checks is non-equality
console.log(4 !== "4"); // resulted 'true' thus it checks for the non-equality in value as well as type

/*
    Logical Operators In JS
    =======================
    1) && --> AND Operator resulted 'true' if all values is true, otherwise 'false'
    2) || --> OR Operator resulted 'true' if any of the value is true, otherwise 'false'
    3) !  --> NOT Operator resulted the negation of value.
*/


// Declaring 'use strict' statement
'use strict';

// Performing Logical Operations
console.log( 5 >= 6 && 1 <= 4); // resulted 'false' thus 5>=6 is 'false' and 1<=4 is 'false' so false && false which is 'false'
console.log( 5 >= 6 || 1 <= 4); // resulted 'false' thus 5>=6 is 'false' and 1<=4 is 'true' so false && true which is 'true'
console.log(!true); // resulted 'false' thus not operator(!) negate the value 
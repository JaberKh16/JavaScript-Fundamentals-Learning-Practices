/*
    Default Precision Limit For Number Type In JS
    =============================================
    In JS, Number Type Variable have some limit on precision where
    1) For Integer Type - limit is 15 digits after that value will get roundsoff
    2) For Float Type - limit is 17 digit after that it gets roundoff.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a integer type number with 15 digits
let number_1 = 999999999999999; // having total 15 digits
console.log(number_1); // results the number as it is

// Declaring a integer type number with 18 digits outside the default precision
let number_2 = 999999999999999999; // having totall 18 digits 
console.log(number_2); // result the number with rounding value

// Declaring floating point type number with 17 digits
let number_3 = 0.94349994536991296; // having total 17 digits
console.log(number_3); // results the number as it is 


// Declaring floating point type number with 19 digits
let number_4 = 0.9999999999999999689; // having total 19 digits
console.log(number_4); // results the number after rounding off which is 1

/*
    String Conversion In JS
    =======================
    In JS, String() is used to convert any other variables to String type
    variable.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a Numeric Type Variable
let number_value = 5;
console.log("Variable Type is: " + typeof number_value);
// Casting Numeric Type to String Type
let number_value_conv_str = String(number_value); 
console.log("Variable Type is: " + typeof number_value_conv_str);


// Declaring a Numeric Decimal Type Variable
let number_dec_value = 5.5;
console.log("Variable Type is: " + typeof number_dec_value);
// Casting Numeric Decimal Type to String Type
let number_dec_value_conv_str = String(number_dec_value); 
console.log("Variable Type is: " + typeof number_dec_value_conv_str);

// Declaring a Null Type Variable
let null_str = null; // 'null' is basically object type variable
console.log("Variable Type is: " + typeof null_str);
// Casting Null Type to String Type
let empty_conv_str = String(null_str); // casting object type to string
console.log("Variable Type is: " + typeof empty_conv_str);


// Declaring a Undefined Type Variable
let undefined_value = undefined; // 'undefined' is basically object type variable
console.log("Variable Type is: " + typeof undefined_value);
// Casting object type to String Type
let undefined_value_conv_str = String(undefined_value); // casting object type to string
console.log("Variable Type is: " + typeof undefined_value_conv_str);


// Declaring a Boolean Type Variable
let boolean_value = true; 
console.log("Variable Type is: " + typeof boolean_value);
// Casting Boolean Type to String Type
let boolean_value_conv_str = String(boolean_value); // casting object type to string
console.log("Variable Type is: " + typeof boolean_value_conv_str);

/*
    Boolean Conversion In JS
    ========================
    In JS, Boolean() is used to convert any other variables to 
    Boolean Type Variable.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String Type Variable
let string_value = "some";
let string_conv_value = Boolean(string_value); // casting string type to boolean type
// while converting string type to boolean type though any length string is still some value so will return true
console.log(string_conv_value); // return 'true' as value 

// Declaring a Empty String Variable
let empty_str_value = "";
let empty_str_conv_value = Boolean(empty_str_value);
console.log(empty_str_conv_value); // return false as value while converting empty string to numeric type though empty string is nothing as a value

// Declaring a Null Type Variable
let null_type_value = null;
let null_type_conv_value = Boolean(null_type_value);
console.log(null_type_conv_value); // return 'false' as value while converting null to numeric type though null is nothing also as a value


// Declaring a Undefined Type Variable
let undefined_type_value = undefined;
let undefined_type_conv_value = Boolean(undefined_type_value);
console.log(undefined_type_conv_value); // return 'false' as value while converting null to numeric type though undefined is no value as a value 


// Declaring a Boolean Type Variable
let bool_type_value = 1;
let bool_type_conv_value = Boolean(bool_type_value);
console.log(bool_type_conv_value); // return 'true' as value while converting boolean to numeric type


// Declaring a Boolean Type Variable
let bool_type_neg_value = -10; // negative value is also something as value so as boolean value which is 'true'
let bool_type_conv_neg_value = Boolean(bool_type_neg_value);
console.log(bool_type_conv_neg_value); // return 'true' as value while converting boolean to numeric type


// Declaring a Boolean Type Variable
let bool_str_type_value = "0";
let bool_str_type_conv_value = Boolean(bool_str_type_value);
console.log(bool_str_type_conv_value); // return 'true' as value while converting boolean string type to numeric type though the string isn't empty

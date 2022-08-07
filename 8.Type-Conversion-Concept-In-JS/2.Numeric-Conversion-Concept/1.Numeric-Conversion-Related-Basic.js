/*
    Numeric Conversion In JS
    ========================
    In JS, Number() is used to convert any other variables to Numeric Type
    Variable.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String Type Variable
let string_value = "some";
let string_conv_value = Number(string_value); // casting string type to numeric type
console.log(string_conv_value); // return 'NaN' as value while converting string type to numeric type

// Declaring a Empty String Variable
let empty_str_value = "";
let empty_str_conv_value = Number(empty_str_value);
console.log(empty_str_conv_value); // return 0 as value while converting empty string to numeric type

// Declaring a Null Type Variable
let null_type_value = null;
let null_type_conv_value = Number(null_type_value);
console.log(null_type_conv_value); // return 0 as value while converting null to numeric type


// Declaring a Undefined Type Variable
let undefined_type_value = undefined;
let undefined_type_conv_value = Number(undefined_type_value);
console.log(undefined_type_conv_value); // return 'NaN' as value while converting null to numeric type


// Declaring a Boolean Type Variable
let bool_type_value = true;
let bool_type_conv_value = Number(bool_type_value);
console.log(bool_type_conv_value); // return 1 as value while converting boolean to numeric type


// Declaring a Boolean Type Variable
let bool_str_type_value = "0";
let bool_str_type_conv_value = Number(bool_str_type_value);
console.log(bool_str_type_conv_value); // return 0 as value while converting boolean string type to numeric type
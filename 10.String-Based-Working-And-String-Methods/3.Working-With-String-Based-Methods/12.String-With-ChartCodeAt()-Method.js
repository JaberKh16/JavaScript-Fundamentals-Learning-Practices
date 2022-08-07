/*
    String Method: charCodeAt(index_value)
    ======================================
    str.charCodeAt('index_value') method used to find the character ASCII code value 
    at the specified 'index_value' position and returns that positioned character ASCII code.
    
    It doesn't support negative index value, if passed then does nothing at all.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let msg = "This is part of the string";
let find_char = msg.charCodeAt(5); // 5th position character ASCII Code value is 105
console.log(find_char);


// Checking For The Negative Positoned Index Value
let msg1 = "This is part of the string";
let find_char_neg = msg1.charAt(-5); // -5th position character ASCII Code value is nothing at all though negative index
console.log(find_char_neg);
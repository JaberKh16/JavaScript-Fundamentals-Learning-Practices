/*
    String Method: charAt(index_value)
    ==================================
    str.charAt('index_value') method used to find the character at the specified
    'index_value' position and returns that positioned character.    

    It doesn't support negative index value, if passed then does nothing at all.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let msg = "This is part of the string";
let find_char = msg.charAt(5); // 5th position character is 'i'
console.log(find_char);


// Checking For The Negative Positoned Index Value
let msg1 = "This is part of the string";
let find_char_neg = msg1.charAt(-5); // -5th position character is nothing at all
console.log(find_char_neg);
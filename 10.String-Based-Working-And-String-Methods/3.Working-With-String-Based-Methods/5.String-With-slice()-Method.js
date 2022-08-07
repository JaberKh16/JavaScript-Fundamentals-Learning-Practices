/*
    String Method: slice(start_index, end_index)
    ============================================
    str.slice(start_index, end_index) method is used to extract a part
    of the string/substring form the given string. It does't affect the original
    string from where it extracted the substring, instead it duplicated the extracted
    substring and replaced in a new variable.

    In slice() method, it extracts the substring from 'start_index' and go until
    'end_index' means included 'start_index' and excluded 'end_index' and extracts
    substring in between.

    slice() method parameters 'start_index' and 'end_index' can be both positive or negative.
    In negative index value it started its count from very right side of the given string
    and count start from -1, -2, ... and so forth.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a strng type variable
let msg1 = "This is good thing to look at now.";
let extracted_msg = msg1.slice(5, 20); // extracted the substring from index 5 to till 20
console.log(extracted_msg);

// Declaring a strng type variable
let msg2 = "This is good thing to look at now.";
let extracted_msg2 = msg2.slice(-20, -2); // extracted the substring from index -2 to till -20
console.log(extracted_msg2);


/*
    String Method: substr(start_index, length_of_str)
    ==================================================
    str.substr(start_index, length_of_str) is used to extract the
    specified indexes based substring between 'start_index' to 'end_index'
    value. It doesn't modify the original string unless it gets
    modified through assignment operation.
    
    substr() parameter 'start_index' indicated the starting index value and 
    'length_of_str' indicates length of the substring it needs to go while extracting
    the substring from the given string.

    substr() having two parameters - 'start_index', 'length_of_str'
    which only has to be positive valued index, does take negative
    index value means support negative index.
    
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let msg = "Welcome to JS Family.";
let msg_extractd_substr = msg.substr(3, 20); // extract the substring from index 3 to length 20
console.log(msg_extractd_substr); 

// Checking For The Situation Passing Through Negative Index
let msg2 = "Welcome to JS Family.";
let msg_extractd_substr2 = msg2.substr(-2, 12); // extract the substring from index -3 to length 20 
console.log(msg_extractd_substr2); 
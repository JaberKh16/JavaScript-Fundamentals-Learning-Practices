/*
    String Method: substring(start_index, end_index)
    ================================================
    str.substring(start_index, end_index) is used to extract the
    specified indexes based substring between 'start_index' to 'end_index'
    value. It doesn't modify the original string unless it gets
    modified through assignment operation.
    
    substring() having two parameters - 'start_index', 'end_index'
    which only has to be positive valued index, doesn't take any negative
    index value.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let msg = "Welcome to JS Family.";
let msg_extractd_substr = msg.substring(3, 20); // extract the substring from index 3 to 20
console.log(msg_extractd_substr); 

// Checking For The Situation Passing Through Negative Index
let msg2 = "Welcome to JS Family.";
let msg_extractd_substr2 = msg2.substring(-13, -2); // extract the substring from index -3 to 20 does nothing at all means no extraction
console.log(msg_extractd_substr2); 
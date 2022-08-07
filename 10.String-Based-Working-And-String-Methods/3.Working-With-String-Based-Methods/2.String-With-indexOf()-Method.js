/*
    String Method: lastIndexOf('substr')
    ====================================
    str.IndexOf('substr') is used to search for the index value of the
    substring that returns the first occurence of index value of that 
    specified substring.
    Doesn't modify the original string unless original string is being modified 
    through assignment.    
    If specified 'substr' is not found then it returns -1.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let message1 = "Something is fissy.";
let message_y = message1.indexOf("is"); // returns the index value 
console.log(message_y);

// Check For The Last Index Value If Having Multiple Same String 
let message2 = "Something is is is is is fissy fissy.";
let msg_first_occ = message2.indexOf("is"); // retuns on the first occurence index of the specified 'substr'
console.log(msg_first_occ);

// Check For The Index If Specified Substring Is Not Found
let message3 = "This is good thing to look at.";
let sub_not_found = message3.indexOf("gthis"); // returns -1 though not found specified 'substr'
console.log(sub_not_found);

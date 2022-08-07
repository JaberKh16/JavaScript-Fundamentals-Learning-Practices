/*
    String Method: search('substr')
    ===============================
    str.search('substr') is used search for the substring inside
    a string type and returns the first occurence of the search substring. 
    If found the 'substr' then only return the index value of that specified
    substring otherwise returns -1.

    Doesn't modify the original string unless original string is being modified 
    through assignment.
    
    It is similar like indexOf() method, only difference is that search() 
    method basically used to work with the regular expression purposes mainly. 
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let msg = "Welcome to JS Family";
let searched_substr = msg.search("to"); 
console.log(searched_substr);

// Check For The Situation When Substring Doesn't Exits
let msg2 = "Welcome to JS Family";
let searched_substr2 = msg2.search("toh"); 
console.log(searched_substr2);

// Check For The Situation When Having Repetted Occurence Of Specified Substring
let repetted_msg = "Welcome to to to JS Family";
let repetted_substr3 = repetted_msg.search("to"); // only get the first occurence of the specified substring 
console.log(repetted_substr3);
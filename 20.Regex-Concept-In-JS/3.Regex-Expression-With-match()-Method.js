/*
    Pattern Match Checking With Regex with test() method
    ====================================================
    string.match(pattern) method is used check for the
    specified pattern is in the string or not and then 
    output the matched string in an array by comma separate
    way.
    
    Syntax:    regex_pattern.test(string)   ; it will check if the string has the pattern or not
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String
let text = "Some is gonna happen, i dont know exactly what!! But i can sense that.Exactly to say dont know!!";
let pattern = /exactly/gi; // case insensitive search globally via specifying 'g' flaf for globally and 'i' flag for insensitive search
console.log(`Text is: ${text}`);
console.log(`Matching Pattern Items: ${text.match(pattern)}`); // provide the index value of first occurence of the specified pattern

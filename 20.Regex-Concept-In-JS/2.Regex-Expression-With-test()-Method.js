/*
    Pattern Match Checking With Regex with test() method
    ====================================================
    regex_pattern.test(string) method is used check for the
    specified string is having the pattern inside it or not and
    return a boolean value. If have the pattern then provide boolean
    'true' else 'false'.
    
    Syntax:    regex_pattern.test(string)   ; it will check if the string has the pattern or not
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String
let text = "Some is gonna happen, i dont know exactly what!! But i can sense that.Exactly to say dont know!!";
let pattern = /exactly/; // looking the pattern specified here which is 'exactly'
console.log(`Text is: ${text}`);
console.log(`Pattern Matched or Not?: ${pattern.test(text)}`); // provide the index value of first occurence of the specified pattern

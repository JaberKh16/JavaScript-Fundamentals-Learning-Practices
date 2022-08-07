/*
    Pattern Matching With Regex
    ===========================
    To match a pattern with regex just need to provide the 
    pattern with the following syntax:
    
    Syntax:    /pattern/       ;  it will look for the pattern in the string
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String
let text = "Some is gonna happen, i dont know exactly what!! But i can sense that.Exactly to say dont know!!";
let pattern = /dont know/; // looking the pattern specified here which is 'exactly'
console.log(`Text is: ${text}`);
console.log(text.search(pattern)); // provide the index value of first occurence of the specified pattern

/*
    String Method: trim()
    =====================
    str.trim() method used to trim out the extra whitespaces from the
    given string. 

    Note: trim() only trim the whitespace starting of the left char and from the right
    side after last character, doesn't trim any whitespace in between them, because anything
    in between is consider as string part In JS.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let x = "              this will be trimmed                    ";
let trimmed_x = x.trim(); // extra whitespace will be trimmed out
console.log("Before Trimming: " + x);
console.log("After Trimming: " + trimmed_x);

// Having Whitespace In Between Situation
let z = "         this       won't be   perfectly trimmed    ";
let trimmed_z = z.trim(); // trimming only the whitespacing from starting of char and end of char
console.log("Before Trimming: " + z);
console.log("After Trimming: " + trimmed_z);
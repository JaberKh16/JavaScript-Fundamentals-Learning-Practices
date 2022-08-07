/*
    String Comparison In JS
    ========================
    In JS, String Comparison follows some rules which are the 
    following:
    1) when strings are in same length and finds no differences among them --> equal string
    2) when string are in same length and having different characters --> then it checkes for the last character used
        ASCII for comparision.
    3) any larger in length string is larger --> which is by default larger.
    4) while comparing between strings it compare string one by one means one character at a time
        and if finds out any character being larger/smaller than anyone then it will go for that 
        comparison only instead checking other characters in the string. If no found no comparision 
        it goes for one character at a time while doing comparison.

    Comparison with Numeric Type Variable
    -------------------------------------
    JS also follows some convention while perform the comparison with the numeric type variable
    which the following:
    1) always convert the string to a number while comparing
    2) if empty string then converted to 0.
    3) if non-numeric string then converted to 'NaN'
    4) if numeric string then converted to number equivalent means if defined "6" then converted to numeric 6.
*/

// Declaring 'use strict' statement
'use strict';

// Performing Some String Comparison 
console.log("A" > "Z"); // while comparing checks for ASCII value-  65 > 91 which is 'false'
console.log("Some" > "RA"); // while comparing it takes the larger length string
console.log("6" <= "5"); // number equivalent comparsion so while comparing it does the following: 6 <= 5 which is 'false'
console.log("some" <= "5"); // while comparing does the following:  NaN <= 5

/*
prompt() is used to take values for a variable from the user through prompt box in browser.

Note: Must assign the prompt() value to a variable though the prompt() is used to take values only.
General Syntax:  
        promp("message_str" , [optional_args]);
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let userName = "";
userName = prompt("Enter your name:");
console.log("User Inputted Name is: " + userName);
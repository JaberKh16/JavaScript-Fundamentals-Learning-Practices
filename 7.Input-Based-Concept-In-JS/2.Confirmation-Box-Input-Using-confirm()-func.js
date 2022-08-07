/*
confirm() is used to take values for a variable from the user through confirmation box in browser.
where the confirm() is basically used to get 'OK' or 'Cancel' as dialog box and saved true or false as follows
for the 'OK' or 'Cancel' respectively.

Note: Must assign the confirm() value to a variable though the prompt() is used to take values only.
General Syntax:  
        confirm("message_str");
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let confirm_age = "";
confirm_age = confirm("Confirm your age is 27?");
console.log("User Confirm his/her age is: " + confirm_age);
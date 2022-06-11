// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let message = "Hey!";
let greetings_msg = "Morning...";

// Concatenating String with '+' operator
let concatenated_msg = message + greetings_msg; 
console.log("Concatenating Of String with '+' operator: " + concatenated_msg);

// Concatenating String with '+=' operator
concatenated_msg += "Babe!";
console.log("Concatenating Of String with '+=' operator: " + concatenated_msg);

// Concatenating String with '-=' operator
// '-=' operator provides an invalid operation because nothing can be subtracted from string type
// thus '-=' operation will resulted a value 'NaN' 
concatenated_msg -= "How are you!";
console.log("Concatenating Of String with '-=' operator: " + concatenated_msg );


// Concatenation with numeric type variable
let msg = "something";
msg = 1 + msg; // results '1something' thus 1 is numeric type while its added with string type its been converted to string
console.log("Converted String value is: " + msg);

msg = 2 + "this" + msg + 5; // results '2thissomething5'
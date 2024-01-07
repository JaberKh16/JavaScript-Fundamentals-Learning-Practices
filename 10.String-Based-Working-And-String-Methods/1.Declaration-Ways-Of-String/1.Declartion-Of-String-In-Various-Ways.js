/*
    Working With Declaration Of Strings
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String Type using 'let' Keyword
let userName = "Austin Power";

// Declaring String Type using String() Class Object
let userEmail = new String("austin_power@gmail.com");

// String Comparsion - Equality  Check 
let message1 = "Something";
let message2 = new String("Something");

console.log(message1 == message2); // checking whether their value is equal or not, though equal so results 'true'
console.log(message1 === message2); // checking whether their value and type both is equal or not, turns out different 'false'

// Checking Whether Two Class Object Based String Equality
let message3 = new String("Something"); // Type is Object, but having different id 
let message4 = new String("Something"); // Type is Object, but having different id

console.log(message3 === message4); // resulted 'false' because both are object type, but both objectt are different though having same value.

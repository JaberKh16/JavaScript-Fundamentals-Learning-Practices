/*
    String Method: split('condition')
    =================================
    str.split('condition') method is used to convert string to
    an array of characters/words/substring based on the parameter 
    'condition' where 'condition' is basically the separator string value
    which is considered while spliting the string into parts.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let x = "Something i wanna share with you";
let spilted_x = x.split(" "); // perform the spliting on whitespace " "
console.log(spilted_x); 


// Declaring another string type variable
let list_of_items = "Apple,Orange,Banana,Jack-Fruit,Pine-Apple";
let spilted_items = list_of_items.split(","); // perform the spliting on commas ","
console.log(spilted_items); 
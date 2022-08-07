/*
    String Method: join('condition')
    ================================
    str.join('condition') method is used to join array of characters
    or set of characters and make a string type variable based on 
    parameter 'condition'.

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let list_of_items = ['Apple', 'Banana', 'Orange', 'Pine-Apple'];
console.log(list_of_items);
let joined_items = list_of_items.join(","); // joining array of chars with separator comma "," 
console.log(joined_items);
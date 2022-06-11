// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let number = 4;
let post_numb_inc;
let pre_numb_inc;
let pre_numb_dec;
let post_numb_dec;

// Post Increment Concept
post_numb_inc = number++;  // post_numb_inc = number, number = number + 1
console.log("Post Increment Value is: " + post_numb_inc);

// Pre Incremental Concept
pre_numb_inc = ++number; // number = number + 1 , pre_numb_inc = number
console.log("Pre Increment Value is: " + pre_numb_inc);

// Post Decrement Concept
post_numb_dec = number--;  // post_numb_dec = number, number = number - 1
console.log("Post Decrement Value is: " + post_numb_dec);

// Pre Decremental Concept
pre_numb_dec = --number; // number = number - 1 , pre_numb_dec = number
console.log("Pre Decrement Value is: " + pre_numb_dec);

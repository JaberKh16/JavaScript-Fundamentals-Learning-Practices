// Declaring 'use strict' statement
'use strict';

// Working With Types Of Infinity 
console.log(`Positive Infinity: ${10/0}`); // results 'Infinity'
console.log(`Negative Infinity: ${-10/0}`); // results '-Infinity'

// Performing Some Arithmatical Operation With Infinity
let number = -10/0; // results '-Infinity'
number = 10/-Infinity; // results 0 though (something/-inf) is 0 mathematically
console.log(`10/-Infinity: ${number}`);

number = 10 % -Infinity; // results 10 though (something%-inf) is 'something' mathematically
console.log(`10 % -Infinity: ${number}`); 


/*
    Array Method: array.forEach(callbackfunction)
    =============================================
*/

// declaring 'use strict' statement
'use strict';

// declaring the array
const fruits = ['mango', 'apple', 'orange', 'pineapple', 'guava'];

console.log('forEach() method with named function example-');

// using forEach() method with the named function
fruits.forEach(function(fruitsItem, index){ // getting the individual items and their index value
    console.log(`value: ${fruitsItem}, and index: ${index}`);
});


console.log('forEach() method with arrow function example-');


// using forEach() method with the arrow function
fruits.forEach((fruitsItem, index)=> { // getting the individual items and their index value
    console.log(`value: ${fruitsItem} and index: ${index}`); 
    // s
});
/*
    Destructing An Array Concept
    ============================
    In Modern JS, ES6 introduce some new syntax to extract multiple properties from
    an array and then assign them to variable in one go. It is really helpful
    to keep code clean and concise.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let [apple, banana, carrot] = ["apple", "banana", "carrot"];
console.log(`${apple}, ${banana}, ${carrot}`);

// If Destructing Does Not Use Then Above Code Look Like This
let fruits = ["apple", "banana", "carrot"];
let fruit_apple = fruits[0];
let fruit_banana1 = fruits[1];
let fruit_carrot = fruits[2];
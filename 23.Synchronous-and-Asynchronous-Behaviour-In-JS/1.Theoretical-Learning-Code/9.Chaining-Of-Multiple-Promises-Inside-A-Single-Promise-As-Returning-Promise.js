/*
    Returning Promises Inside A Single Promise
    ==========================================
    When promises gets handled it generally returns a value which then 
    can be returned as new promise.
    
    Like- A handler, used in .then(handler) may create and return a promise.

    In that case further handlers wait until it settles, and then get 
    its result.
    
    Returning promises allows us to build chains of asynchronous actions.
    

*/

// defining 'use strict' statement
'use strict';

// creating a promise
const returningPromises = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // resolved and has result 1
})
.then(function(result) {
    console.log(`Returned from 1st Promise: ${result}`); // prints 1
    // returning a promise
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000); // resolved and has result 2
    });
})
.then(function(result) { // (**)
    console.log(`Returned from 2st Promise: ${result}`); // prints 2
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000); // resolved and has result 4
    });
})
.then(function(result) {
    console.log(`Returned from 3rd Promise: ${result}`); // prints 4
});
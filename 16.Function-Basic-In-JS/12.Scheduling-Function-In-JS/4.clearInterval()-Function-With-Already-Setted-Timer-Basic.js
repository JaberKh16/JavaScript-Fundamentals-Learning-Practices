/*
    clearInterval() Function Concept
    =================================
    clearInterval() function is used to clear out the setInterval() 
    setted interval value.

    Syntax:
        clearInterval(setInterval());
*/

// Declaring 'use strict' statement
'use strict';

// Setting A Timer Counter
let counter = 0;
let timer = setTimeout(() => {
    console.log(`${counter++}`);
}, 2000);
console.log(`Timer Value is now: ${timer}`);

setTimeout(()=>{
    clearInterval(timer); // clearing the timer
    console.log('Stopped Timer.');
}, 10000);
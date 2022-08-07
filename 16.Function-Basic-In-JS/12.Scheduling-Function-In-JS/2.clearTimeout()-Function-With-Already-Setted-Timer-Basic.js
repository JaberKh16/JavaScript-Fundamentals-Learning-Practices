/*
    clearTimeout() Function Concept
    ===============================
    clearTimeout() function is used to clear out the setTimeout() function
    timer value.
*/

// Declaring 'use strict' statement
'use strict';

// Saving The Timer To See Its Internal Value
let timerValue = setTimeout(() => { // with Arrow Function
    console.log("Counter");    
}, 2000);

console.log(timerValue);// timer identifier which result started from 1 to so forth couting increment by 1
clearTimeout(timerValue); // to clear out the setTimeout()
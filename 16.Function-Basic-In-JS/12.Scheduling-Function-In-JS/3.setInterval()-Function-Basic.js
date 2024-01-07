/*
    setInterval() Function Concept
    ==============================
    setInterval() function is used to set a interval(a time interval) 
    for doing some work, with this function it will keep calling the function
    indefintly(repeatedly) at the setted time interval.

    Syntax:
        
        setInterval(functionName, intervalDelayInMilisec, arg1, arg2, ...argN);

    The difference with setTimeout() is that setTimeout() function only 
    call the function after a setted time delay doesn't not do repetittion.

*/

// Declaring 'use strict' statement
'use strict';

// Setting A Timer Counter
let counter = 0;
let timer = setInterval(() => {
    console.log(`${++counter}`);
}, 2000);
console.log(`Timer Value is now: ${timer}`);
/*
    setTimeout() Function Concept
    =============================
    setTimeout() function is used to provide some delay
    while calling the function.

    Syntax:
        setTimeout(functionName, delayMilisecs, arg1, arg2, ...argN);
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function printingText(text){
    console.log("Hey" + " " + text);
};

// setTimeout() Function With Different Values
setTimeout(printingText("JK"), 2000); // with Normal Function
setTimeout(printingText, 2000, "Jhon"); // with Normal Function 'arg1' specified
setTimeout(alert("Hello There!"), 2000);

setTimeout(() => { // with Arrow Function
    console.log("Hey ");    
}, 2000);


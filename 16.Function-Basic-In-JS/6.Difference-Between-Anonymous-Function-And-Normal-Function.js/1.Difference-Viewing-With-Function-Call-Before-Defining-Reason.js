/*
    Difference Of Calling Function Before Function Definition
*/

// Declaring 'use strict' statement
'use strict';

// Example With Declaration Function
someValue(); // Function 
function someValue(n1=10){
    return n1; 
};
console.log(n1=15); 



// Example With Anonymous Function
someValues();
let someValues = function(value=10){
    console.log(value);
};
/*
    Local Scope Variable And Global Scope Variable
    ===============================================
    Local Scope Variables are those variables which have a
    block scope life existency means outside the block it will 
    be vanished/died. Those variables which are declared inside 
    the user defined function have the local scope thus called
    Local Scope Variables.

    Global Scope Variables are those variables which can have its
    scope overall the program means those variable which will only 
    vanished if the program execution is being done. Those variables
    are declared anywhere in the program have the global scope thuse
    called Global Scope Variables.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
let number = 2; // having global variable scope
function pritingNumber() {
    let number = 5; // having local variable scope
    console.log(`Local Scope Variable From Function: ${number}`); // this will results the local scope variable 'num' value which is 5
}

// Calling The Function
pritingNumber();
console.log(`Global Scope Variable Outside Function: ${number}`);

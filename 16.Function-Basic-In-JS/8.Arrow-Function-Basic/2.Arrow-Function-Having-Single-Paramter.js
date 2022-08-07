/*
    Arrow Function With Single Parameter
    ====================================
    Syntax: 
        (var_name) =>{

        };
    or, var =>{
        
    };
*/

// Declaring 'use strict' statement
'use strict';

// Declaring Arrow Function
let number = ((num) =>{
    for(let num=1; num<=10; num++){
        console.log(`${num*num}`);
    }
})();
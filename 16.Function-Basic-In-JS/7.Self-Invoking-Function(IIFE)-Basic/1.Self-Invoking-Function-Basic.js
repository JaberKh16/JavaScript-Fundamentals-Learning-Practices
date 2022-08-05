/*
    Self Invoking Function Concept
    ==============================
    Self Invoking Function In JS are those function which 
    will make them call themselves. Self Invoking Function
    also known as IIFE(Immediately Invoking Function Expression).
    
    Syntax:
        (funtion (){

        })();


    To self invoke a function add a () after the function
    definition is done, before the semicolon.

    Use Case Of IIFE
    -----------------
    IIFE best use case is whenever there's having a similar named
    variables and those variables are defined on the Global Scope
    then there's possiblities of changing of values. Imagine a 
    scenario-
        
    Though Vanila JS doesn't support modularity thus one developer
    say write a file where he used some variable named as - 'a'
    in the Glbal Scope. Now, another developer in his file he also
    uses 'a' variable to do his logical work now the first developer
    'a' variable gets changes with the value of second developer writtem
    'a' variable, which cause problem. To avoid this type of issues
    JS introduce IIFE.


    Note: Can't make a normal function declaration self invoking.
    
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a self invoking function
let number = 1;
let counter = (function(){
    for(let number=1; number <=10; number++)
    {
        console.log(`${number}`);
    }
})();

//console.log(`${counter()}`);
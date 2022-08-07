/*
    Asynchronous Concept With setTimeout() Function
    ===============================================
    setTimeout() Functions is used to feature an Asynchronous Behaviour
    in JavaScript code. This function takes a "Callback Function" as
    a parameter which then invoked after a given time provide by
    the setTimeout() function timer parameter-
        
            setTimeout(callback, timer)

    How the Asynchronous Behaviour occurs through setTimeout()
    ----------------------------------------------------------
    Where the setTimeout() defines when Execution Context hits that 
    line V8 engine of browser puts that into the "Web API" which then
    holds the setTimout() function till the other code execution
    in "CallStack" are happening.
    
        CallStack
    |                 |             |--------------------------------|
    |                 |                         Web API
    |                 |             |--------------------------------|
    |                 |             |    setTimeout(function(){      |
    |                 |             |                                |
    |-----------------|             |    }, timer)                   |
    |   func_name()   |             |--------------------------------|
    |-----------------| 
    | Global Exc.Con. |
    |=================|
    
    Finally when the timer ends "Web API" returns the setTimeout() to 
    "Callback Queue" [which acts like FIFO] then passed the setTimeout()
    been passed to "CallStack" through the "Event Loop".

        |   Callback Queue  |                         |   CallStack     |
        |                   |                         |                 |
        |                   |   ===> Event Loop <===  |                 |
        | setTimeout(()=>{})|                         |   Exc. Con.     |
        |===================|                         |=================|
        
    Event Loop runs when it sees CallStack is empty and Callback Queue has 
    "something" inside it, then Event Loop take that "something" and put it
    into the CallStack.
    
*/

const processOrder = function (customer){
    console.log(`Processing order for Customer-1`);
    
    // setting the setTimeout()
    setTimeout(function (){
        console.log(`Cooking Complete`);
    }, 4000);

    console.log(`Order processed for Customer-1`);
}

console.log(`Taking order for Customer-1`);
processOrder();
console.log(`Completed order of Customer-1`);
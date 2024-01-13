/*
    Asynchronous Flow Controll Issue Handles Through Multiple Callbacks
    ===================================================================
    In Synchronous Coding way programmer can easily handles the code
    control flow, but while working with Asynchronous Coding setTimeout()
    automatically comes into the CallStack after the timer ends thus
    programmer doesn't have control over here which leads to breaking
    of code control flow called - "Asynchronous Flow Control Issue".

    In real life problem there can be many Asynchronous tasks(such as
    taking data from server through API call, reading data from database
    , getting large from the filesystem etc..). Though we used the 
    setTimeout(callback, timer) function with some specific timer it
    doesn't gurreenty that we gets the order of the program to be 
    maintained through Asynchronous calls.

    To resolve that issue uses of Callback Functions in right way can 
    be very much helpful.

    Disadvantage Of Callbacks
    -------------------------
        a. Callback Hell
        b. Inversion Of Controll

*/

const takingOrder = (customerNo, processingOrderFunc)=>{
    console.log(`Taking order from ${customerNo}`);
    // invoking callback of "processingOrderFunc" function
    processingOrderFunc(customerNo); 
};

const processingOrder = (customerNo, completeOrderFunc)=>{
    console.log(`Processing order of cooking ${customerNo}`);
    setTimeout( function (){
        console.log(`Cooking Completed`);
        console.log(`Orders been processed successfully for ${customerNo}`);
    }, 4000);

    // invoking callback of "completeOrderFunc" function
    completeOrderFunc(customerNo); 
};

const servingOrder = function (customerNo){
    console.log(`Completed order(serving) for ${customerNo}`);
};


// invoking all the callback functions
takingOrder("customer-1", function (customerNo){ // takes a value and function as parameters
    processingOrder(customerNo, function (customerNo){ // takes a value and function as parameters
        servingOrder(customerNo); // takes a single value as parameter
    });
});
/*
    Promises With Its Available Handlers
    ====================================
    Creation of Promises normally provides the Promises Object.
    Promises has three types of handlers to get the certain
    result or error.

            promise_obj
                .then(callbacks)
                .catch(callbacks)
                .finally(callbacks)
    Those 'callbacks' inside the chains are the functions to get values 
    with .then() and if any error occurs then to catch them with .catch().
    
    In the above syntax-
    1. then()
    --------- 
    then() is invoked when a promise is either resolved or rejected. 
    It may also be defined as a career which takes data from promise 
    and further executes it successfully.

    Parameters: 
    then() method takes two functions as parameters. 
    a)  First function is executed if promise is resolved and 
        a result is received.
    b)  Second function is executed if promise is rejected and 
        an error is received. (It is optional and there is a 
        better way to handle error using .catch() method.)

    Syntax-
            promise
                .then(function(successMessage) {
                    console.log(successMessage);
                }, 
                function(errorMessage) {
                    //error handler function is invoked
                    console.log(errorMessage);
                })

    2. catch() 
    ---------
    catch() is invoked when a promise is either rejected or some error 
    has occurred in execution. It is used as an Error Handler whenever 
    at any step there is a chance of getting an error.

    Parameters: 
    catch() method takes one function as parameter. 
    a)  Function to handle errors or promise rejections.(.catch() method 
        internally calls .then(null, errorHandler), i.e. .catch() is just 
        a shorthand for .then(null, errorHandler) )
    
    Syntax-
        promise
                .then(function(successMessage) {
                    console.log(successMessage);
                })
                .catch(function(errorMessage) {
                    //error handler function is invoked
                    console.log(errorMessage);
                })

    2. finally() 
    ---------
    .finally() is similar to try {...} catch {...}, there’s finally in promises. 
    which denotes .then(f, f) in the sense that f runs always when the 
    promise is settled: be it resolve or reject.

    The idea of finally is to set up a handler for performing cleanup/finalizing 
    after the previous operations are complete.

    Syntax-

        promise
            .then(function(successMessage) {
                console.log(successMessage);
            })
            .catch(function(errorMessage) {
                //error handler function is invoked
                console.log(errorMessage);
            })
            .finally(function(){
                // statement
            })
*/
// defining the 'use strict' statement
'use strict';

// creating the Promise
const promise = new Promise(function(resolve, reject){
    const hasMeeting = false;
    const meetingInformation = {
        meetingName: "Production Facilties",
        meetingTime: "20th July, 2022",
        meetingLocation: "Remote"
    }
    if(!hasMeeting){ // checking if there's a meeting
        setTimeout(()=>{
            console.log('Promises Resolve....');
            resolve(meetingInformation);
        }, 1000);
    }
    else{
        console.log('Promises Rejected.....');
        setTimeout(() => {
            reject(new Error("Meeting has already been scheduled."));
        }, 1000);
    }
});

// prints out the Promise
console.log(promise); // returns the Promises State

// to get the value from the Promise need to chain them with .then 
promise
.then(value=>{
    console.log(`Meeting ${value.meetingName} has been
        scheduled on ${value.meetingLocation} at ${value.meetingTime}`);
})
.catch(error =>{
    console.log(error.message);
})
.finally(function(){
    console.log('Promises Work Succesfully....');
})
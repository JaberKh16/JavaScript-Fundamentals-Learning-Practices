/*
    Promises Concept In JS
    ======================
    Promises in JS are special object  which are used to handle asynchronous
    operations and though they are easy to manage while dealing with multiple
    asynchronous operation where Callbacks might create a "Callback Hell".

    So, Promises are the ideal choice for handling multiple callbacks at the 
    same time, avoiding the undesired callback hell situation.

    Promises has 3 sates which are the following-
        
        1) Pending
        2) Fullfiled
        3) Rejected

    Syntax Of Promises:
    -------------------
        1) Creating Promise with Anonymous Function-
            
            const promise = new Promise(function(resolve, reject){

            })
        
        2) 1) Creating Promise with Arrow Function-
            
            const promise = new Promise((resolve, reject) => {
                
            })
    In the syntax code- "resolve" and "reject" are the callbacks.
    When the executor(Promise Object) obtains the result, be it  
    soon or late, doesn’t matter, it should call one of these callbacks:

        a) resolve(value) — if the job is finished successfully, 
                            with result value.
        b) reject(error) —  if an error has occurred, error is the 
                            error object.
    To summarize- the executor runs automatically and attempts to perform 
    a job. When it is finished with the attempt, it calls resolve if 
    it was successful or reject if there was an error.
    
    Creation of Promises normally provides the Promises Object. To
    get the values from the Promises need to chain.
            promise_obj
                .then(callbacks)
                .catch(callbacks)
    
    Those 'callbacks' inside the chains are the functions to get values 
    with .then() and if any error occurs then to catch them with .catch().

    Chaining of multiple .then() can be possible where single .catch() is 
    used to hold every single error for the resolve cases.
    Syntax For the Chaining Look like the following-
            promise_obj
                .then()
                .then()
                .catch()

    Note: Every .then() in turns creates a new promise and passes the previous
    promise result to the new one. Because when a handler returns a value, 
    it becomes the result of that promise, so the next .then() is called 
    with it.


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
            console.log('Promises Resolved....');
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
promise.then(value =>{
    return value; // returning the value which is the value of the promise here defined object
})
.then((value)=>{
    console.log(`Meeting ${value.meetingName} has been scheduled on ${value.meetingLocation} at ${value.meetingTime}`);
})
.catch(error =>{
    console.log(error.message);
})

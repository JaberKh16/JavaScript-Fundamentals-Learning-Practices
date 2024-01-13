/*
    Promise.resolve() Method Concept
    =================================
    Promise.resolve() method is nothing but the fancier/shorter 
    way of writing resolve callback.

    Similar like- resolve() callback, Promise.resolve() returns a 
    Promise object that is resolved with a given value.

    In this case, 3 things can happen-

        1)  If the value is a promise then promise will returned
        2)  If the value has ".then()" attach to the promise then the 
            returned promise will follow that .then() to till the
            final state.
        3) the promised fulfiled with its value will be returned.
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

// creating a function which returns a promise thus considered as promise
const meetingFullInfo = (meetingInformation) =>{
    /* 1st way
    // return new Promise((resolve, reject)=>{
    //     const information = 
    //     `Meeting ${meetingInformation.meetingName} has been scheduled on 
    //     ${meetingInformation.meetingLocation} at ${meetingInformation.meetingTime}`;
    //     resolve(information);
    // })
    */

    // 2nd way with Promise.resolve(value)
    const information = 
    `Meeting ${meetingInformation.meetingName} has been scheduled on 
    ${meetingInformation.meetingLocation} at ${meetingInformation.meetingTime}`;
    return Promise.resolve(information);
}

// to get the value from the Promise need to chain them with .then 
promise
.then(meetingFullInfo) // including promise so will returns the promise to the next state
.then(value =>{
    console.log(value); // returning the value which is the value of the promise here defined object
})
.catch(error =>{
    console.log(error.message);
})
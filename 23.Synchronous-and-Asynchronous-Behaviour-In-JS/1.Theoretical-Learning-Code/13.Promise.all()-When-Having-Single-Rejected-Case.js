/*
    Promise.all() With Single Rejected Case
    =======================================
*/

// defining 'use strict' statement
'use strcit';

// Promise that resolves after a given time
const timer = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 2000) {
                reject(`Rejected in ${time}`);
            } 
            else {
                resolve(`Completed in ${time}`);
            }
        }, time);
    })
}

// creating time duration
const durations = [1000, 2000, 3000]

// Array contains some time durations
const promisesArray = [] //empty array to store promises

durations.map((durations) => {
    // Pushing durations in the promises array
    promisesArray.push(timer(durations));
})

// Passing an array of pending promises to Promise.all
Promise.all(promisesArray)
.then(response => console.log(response))
// Promise.all cannot be resolved, as one of the
// promises passed, got rejected.
// Promise.all throws an error.
.catch(error => console.log(`::Error:: ${error}`));

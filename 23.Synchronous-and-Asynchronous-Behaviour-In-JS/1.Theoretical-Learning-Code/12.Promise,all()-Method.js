/*
    Promise.all() Method Concept
    ============================
    Promise.all() method takes an iterable where the iterable can
    be an array, object or even promises and returns a single Promise
    even all the promises gets resolved. If any of the promises
    passed as an iterable gets rejected then eventually(asynchronously)
    all the promises gets rejected.

    In simple terms, if any of the passed-in promises get rejected then
    asynchronously rejects the value of promise that already rejected,
    whether or not the other promises have resolved.

    Syntax- 
        Promise.all(iterable)

*/

// defining 'use strict' statement
'use strict';

const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-1 Gets Resolved..");
    }, 1000);
});

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-2 Gets Resolved..");
    }, 2000);
});

const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-3 Gets Resolved..");
    }, 3000);
})

// making an array to store all the promises
let data = [promise1, promise2, promise3 ];

try{
    // creating another promise to handle all those promises
    const combinedPromises = Promise.all(data);
        combinedPromises.then((result) =>{
            console.log(result);
        });
}
catch(error){
    console.log(error.message);
}


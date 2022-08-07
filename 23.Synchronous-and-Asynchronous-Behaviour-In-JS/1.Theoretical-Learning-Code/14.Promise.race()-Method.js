/*
    Promise.race() Method Concept
    ==============================
    Promise.race() method takes an iterable where the iterable can
    be an array, object or even promises and returns a single Promise.
    It is almost similar like the Promise.all() method with a single
    difference which is that instead of returning all the promises
    if gets resolve it returns a single promise which is being 
    resolved first only.


    In simple terms, this method returns only first promise which gets
    resolved first among the other resolved promises, kinda like a races
    between the promises whichever reached the goal point first wins.

    Syntax- 
        Promise.race(iterable)

*/

// defining 'use strict' statement
'use strict';

const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-1 Gets Resolved..");
    }, 4000);
});

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-2 Gets Resolved..");
    }, 2000);
});

const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise-3 Gets Resolved..");
    }, 5000);
})

// making an array to store all the promises
let data = [promise1, promise2, promise3 ];

try{
    // creating another promise to perform a races between the promises
    const combinedPromises = Promise.race(data);
        combinedPromises.
        finally(()=>{
            console.log(`Only the firstest resolving promises gets printed-`);
        })
        .then((result) =>{
            console.log(result);
        })
        
}
catch(error){
    console.log(error.message);
}


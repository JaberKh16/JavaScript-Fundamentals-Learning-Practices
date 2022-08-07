/*
    Creating Multiple Promise
*/

// defing 'use strict' statement
'use strict';

// creating 1st promise
const promise1 = new Promise((resolve, reject)=>{
    const error = true;
    if(!error){
        resolve("Resolving Promise-1");
    }
    else{
        reject(new Error("Rejecting Promise-1"));
    }
});

// creating 2nd promise
const promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Resolving Promise-2");
    }, 3000);    
});


promise1.then(value =>{
    console.log(value.toString());
}).catch(error=>{
    console.log(error.toString());
});


promise2.then(value =>{
    console.log(value.toString());
}).catch(error=>{
    console.log(error.toString());
})
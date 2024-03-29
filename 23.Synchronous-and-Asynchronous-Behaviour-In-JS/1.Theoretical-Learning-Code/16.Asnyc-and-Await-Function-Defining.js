/*
    Async/Await Function Defining Concept
    ================================
    To acheive asynchronous behaviour in JS, ES6 define a new way
    of doing asynchronous operation through synchronous callback 
    functions. This way of defining asynchronous function reduces
    the multiple no. of "thenables" while working with promises.

    To define a function as asynchronous function need to use the
    keyword- "async" before it.

    Syntax-
        1) async function functionName(){ // with named function

        }
        2) async function(){ // with anonymous function

        }
        3) async ()=>{ // with arrow function

        }

    Now, though the async function returns a promise so need to define 
    a "await" keyword inside the async function to wait for that promise
    to get resolved. About the "await" it must be define inside the
    async function only and it behaves similar like the .then() in promises
    because async function basically returns a promise and await waits for
    that promise to resolve.
    Syntax-
        let var = await promise; // await waits for the promise to resolve

    About async/await while awaiting for the promise to resolve it might looks
    like the program execution was stop, but that isn't the case basically
    think of scenario - For an async operation it take some time to be 
    settled(Promises), for that particular JS Eagine aka 'Call Stack' is running
    doing its work, when 'Call Stack' seen the 'await' it suspend the promise
    results 'Call Stack' removes the promises until its settled and after a
    certain time when resolves put into the 'Call Stack' excutes. Now, the
    execution order is it's executes-
        a. all code into the stack before 'await'
        b. after promises settled execute the next stack code
           so if there were any synchronous code is placed after
           'await' excutes that first and then excecutes promises
            

*/

// defining 'use strict' statement
'use strict';

const data = {
    postId : "122d34e",
    postType : "Blog",
    postDate: new Date('2017-01-01')
};

// defining the async function
const printGivenData = async function(data){
    // console.log(printGivenData.postId);
    const promise = new Promise((resolve, reject)=>{
        if(data.postId === "122d34e"){
            resolve(data);
        }
        else{
            reject(new Error("PostId doesn't match"));
        }
    });

    const wait = await promise;
    console.log(promise);
    console.log(wait);
}

printGivenData(data);

// printGivenData.then((value)=>{
//     console.log(value);
// });

/*
    Thenables In Promise Concept
    ============================
    Generally, chaing Of multiple .then() are called-"Thenables".
    
    To be precise, a handler may return not exactly a promise, but a 
    so-called “thenable” object – which is an arbitrary object that 
    has a method .then(). It will be treated the same way as a promise.

    The idea is that 3rd-party libraries may implement “promise-compatible” 
    objects of their own. They can have an extended set of methods, 
    but also be compatible with native promises, because they 
    implement .then().

*/

// defining 'use strict' statement
'use strict';

// creating a class of handlers- "thenables"
class Thenable {
    // having a constructor 
    constructor(num) {
        this.num = num; // this.num = 1
    }
    // class method
    then(resolve, reject) {
      // calls and resolve now has a function 
      console.log(resolve); // function() { native code }
      // resolve with this.num*2 after the 1 second
      setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

const customPromise = new Promise((resolve) => {
    resolve(1); // resolve immediately and has result 1
})
    .then(result => {
        // creating a constructor of Thenable and returns it
        return new Thenable(result); // new Thenable(1)
    })
    .then(result=>{
        console.log(result)
    }); // shows 2 after 1000ms

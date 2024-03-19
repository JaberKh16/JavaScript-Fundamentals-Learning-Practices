/*
    JavaScript Throwable Concepts
    =============================
    JavaScript provides a way to throw errors using throwable object. It requires to use the keyword 'throw' with an
    instance of exception class.

    Syntax:
        throw new Error();              // throwing the Error class
        throw new ReferenceError()      // throwing ReferenceError class

    Note that, can also reference the error with exact exception type the code will through when executed.
 */

const number = 1;
const divisionOperation = (number)=>{
    try {
        const div = number/0;
        // throw the error
        throw new Error(); // forcing it throw an exception to the catch block
    } catch (error) {
        console.log(error);
    }
}

divisionOperation(number);
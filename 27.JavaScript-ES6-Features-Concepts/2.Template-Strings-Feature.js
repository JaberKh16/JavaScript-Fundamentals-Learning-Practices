/*
    JavaScript ES6 Features - Template String
    =========================================
    Before ES6 Template String Feature JS use ES5 normal way of
    dealing with string like if have to concate string with
    some variable then use '+' operator.
    For Example-
            var name = 'Karen'
            var age = 25;
            console.log("Person Name is " + name + " and age is "+ age);

    ES6 then provides new way more convienient way of dealing with strings
    through Template String.

        console.log(`Person Name is ${name} and age is ${age}.`);
        
*/

// Example-1- ES5 way of dealing with string
var personName = 'Karen'
var personAge = 25;
console.log("Person Name is " + personName + " and age is "+ personAge);


// Example-2- ES6 way of dealing with string (template string)
let storeName = "Walmart"
let openYear = 1994;
console.log(`Store Name is : ${storeName} and opened in ${openYear}.`);
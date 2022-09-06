/*
    JavaScript ES6 Features - let/const
    ===================================
    JavaScript ES6 comes up with a new way of declaring variables
    through "let" and "const". Both of them have Block Scope in
    terms of Scoping in JS.

    In ES5, variables are being declared through 'var' keyword which
    has Global Scope context in terms of Scoping. Thus this of way
    of declaring variables are accessible through 'window' object
    thus 'window' has is the Global Scope object.
    
    For Example-
                
                var a = 5;
                console.log(a); // returns 5
                console.log(window.a); // returns 5

    Also, with 'var' variables can be reinitialize with new type means
    assignment with new type can possible with 'var' declaration.

        a = 'Jesse'; // reinitialize with new type 
    
    But with "let" or "const"  its possible because with "let" 
    reinitializing of new type though assignment is valid but 
    redeclaring of same variable name is not. 
        
        let a = 5;
        a = 'Jesse'; // valid
        let a = 6; // not valid throws TypeError: Redeclaration of 'a'
    
    With "const" reinitializing with new type through assignment is not
    possible because this variable is constant type. And redeclaration
    of variable having same name is not possible again.

        const a = 4;
        a = 'Jesse'; // not valid throws TypeError: Assignment to constant variable
        const a = 6; // not valid throws TypeError: Redeclaration of 'a'

    
*/


// Example-1- 'var' Declaration has Global Scope 
// ES5 way of declaring variable
var personName = 'Jacob'; 
var personAge = 24;

// accessing variables through their name
console.log(personName, personAge);
// Though 'var' having Global Scope 
console.log(window.personName, window.personAge);


// Example-2- 'var' support reinitialize with new type 
var someVar = 56;
someVar = 'http'; // valid
console.log(someVar);
var someVar = 65;
console.log(someVar);

// Example-3- 'let' and 'const' declaration has Block Scope
// ES6 way of declaring variables
let storeName = "Walmart";
console.log(storeName);
storeName = "Alibaba Express"; // valid
console.log(storeName);

const flagName = "England";
console.log(flagName);
// flagName = "Germany" // invalid constant can be reinitalized
// console.log(flagName);

// Example-4- Proving 'var' has Function Scope If Declared Inside Function
function ES5VaraiblesScope(){
    var playName = 'Footbale';
}
console.log(playName); // invalid throws ReferenceError: playName is not defined

// Example-5- Proving 'let' and 'const' has Block Scope
if(true){
    let playName = 'Footbale';
}
console.log(playName); // invalid throws ReferenceError: playName is not defined
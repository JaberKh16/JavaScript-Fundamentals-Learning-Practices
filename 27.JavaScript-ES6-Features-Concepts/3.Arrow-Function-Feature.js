/*
    JavaScript ES6 Features- Arrow Function
    =======================================
    Arrow Function is ES6 Feature which has its surrounding scope means
    have the Block Scope wherever it is being defined.
    
    Arrow function can be defined in following way-
        1) () => {} ;// if not having any parameter
        2) (p1, p2) => {return p1 + p2 } ;// if having some parameters
        
    In case of Regular Functions(such as Anonymous and Named Functions)
    insidal 'this' keyword refers to the 'window' object because having
    the Global Scope.
    
*/

// Example-1- ES5 way of dealing with function
var person = {
    firstName: "Jonathan",
    lastName:"Cash",
    fullName: function(){
        return function(){
            // not having the object function scope
            console.log(this); // here 'this' denotes the 'window'
            console.log(this.firstName + ' ' + this.lastName); // returns undefined undefined
        }
    }
}

person.fullName()();

// Solvance-1 ES5 
var person = {
    firstName: "Jonathan",
    lastName:"Cash",
    fullName: function(){
        var that = this; // here 'this' has its surrounding scope which is object function scope
        return function(){
            console.log(that.firstName + ' ' + that.lastName);
        }
    }
}

person.fullName()();


// Example-2 ES5 way of solving the issue
// Solvance-2
var person = {
    firstName: "Jonathan",
    lastName:"Cash",
    fullName: function (){
        // arrow function having its surrounding scope thus object scope
        return ()=>{
            console.log(this.firstName + ' ' + this.lastName);
        }
    }
}

person.fullName()();
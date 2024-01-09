/*
    Closure Concepts In JS
    ======================
    Functions along with its lexical scope bundled together is called as Closure. Closure
    has very important part in Functions, its nothing but a function returning a functions
    where inner function has the lexical scope access to the parent functions like- chanining
    of access from inner to upwords. 

    Note: Closure stores the reference of the lexical scope of the parent function block.

    Syntax:
        function parent(){
            var a = 10;
            // here inner() function is the Closure 
            function inner(){
                console.log(a);
            }
            return inner;
        }
        parent(); // invoking parent
        parent()(); // invoking inner


    Uses Of Closures
    ----------------
    a. Module Design Pattern
    b Cuurrying
    c. Function like - once
    d. Memoize
    e. Maintaing state in async 
    f. setTimeouts
    g. Iterators

*/

// Example-1
function parent(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    a = 100;
    return inner
}

const callFunc = parent();
console.log(callFunc); // store the return value which is function inner(){} --> [Function: inner]
callFunc(); // to call the inner() functions


// Example-2
function outerparent(){
    var b = 200;
    function parent(){
        var a = 10;
        function inner(){
            console.log(a, b);
        }
        a = 100;
        return inner;
    }
    return parent;
    
}

const callFunc2 = outerparent(); // store the return value which is function parent(){} --> [Function: parent]
console.log(callFunc2);
callFunc2()(); // store the return value which is function inner(){} --> [Function: inner]() with invoking
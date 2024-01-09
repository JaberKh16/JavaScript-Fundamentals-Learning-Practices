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
    h. Data and Encapsulation

    Closures Disadvantage
    ---------------------
    a. Over Consumption Of Memory - though variables are not garbage collected for Closures

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
        let a = 100;
        return inner;
    }
    return parent;
    
}

const callFunc2 = outerparent(); // store the return value which is function parent(){} --> [Function: parent]
console.log(callFunc2);
callFunc2()(); // store the return value which is function inner(){} --> [Function: inner]() with invoking




// Example-3
function outerparent2(){
    var b = 200;
    function parent(msg){
        var a = 10;
        function inner(){
            console.log(a, b, msg);
        }
        let a = 100; // if 'a' is commented out, then it will try to resolve 'a' via going upper scope thus will get the value Global value 'a'
        return inner;
    }
    return parent;
    
}
let a = 200; // a has Global Scope which has different referece with parent() variable 'a'
outerparent2()("Something")();


// Example-4: Data Hiding And Encapsulating
function counter(){
    var count = 0;
    return function innerIncrement(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

// counter2 is different variable then 'counter'
var counter2 = counter();
counter2();


// Example-5: Data Hiding And Encapsulating(Scalling With Function Constructor)
function CounterFuncConstructure(){
    var count = 0;
    this.innerIncrement = function innerIncrement(){
        count++;
        console.log(count);
    }
    this.innerDecrement = function innerIncrement(){
        count--;
        console.log(count);
    }
}

var counterFuncConstructure  = CounterFuncConstructure();
counterFuncConstructure.innerIncrement(); // to increment
counterFuncConstructure.innerDecrement(); // to decrement
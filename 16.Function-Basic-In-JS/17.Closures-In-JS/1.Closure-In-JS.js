/*
    Closure Concepts In JS
    ======================
    Functions along with its lexical scope bundled together is called as Closure. Closure
    has very important part in Functions, its nothing but a function returning a functions
    where inner function has the lexical scope access to the parent functions like- chanining
    of access from inner to upwords. 

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
*/
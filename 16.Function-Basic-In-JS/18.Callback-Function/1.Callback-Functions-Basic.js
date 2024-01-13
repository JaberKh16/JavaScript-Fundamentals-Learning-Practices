/*
    Callback Function Concepts In JS
    ================================
    When a function is passed into another function as a paremeter that passed function is 
    nothing but the Callback Function.

    Or, A callback is a function that is passed as an argument to another function and 
    is executed after the outer function has completed.

    Callback gives us the whole asynchronous feature - concurrency in JS.

    Syntax:
        function print(fn) {  
            fn();
        }
    
    Or,
        1.  function a(param){

            }
            a(function (){});

        2.  function a (param ){
            }
            a(() =>{});
        
        2.  function a (y){
            }
            a(function y(){});

    
    Advantage Of Callback Function
    ------------------------------
        a. Aysnchronous Behaviour


    Disadvantges Of Callback Function
    ---------------------------------
        a. Callback Hell
        b. Inversion Of Code

*/




// Example-1
function MakingUpperCase(params) {
    // return params(); // return as invoking thus passed will be called as returned
    return params; // retuns the function statement
}

function toUpperCase(text = "ghost rider"){
    return text.toUpperCase();
}

const calle = MakingUpperCase(toUpperCase);
console.log(calle); // use when invoked is returned
// console.log(calle()); // use when function statement has retuned


// Example-2
const buttonClick = document.getElementById('submitOrder');
buttonClick.addEventListener('click', function(){ // here, addEventListener() is callback
    setTimeout(function(){}, 2000); // here in setTimeout() function(){} is a callback
});
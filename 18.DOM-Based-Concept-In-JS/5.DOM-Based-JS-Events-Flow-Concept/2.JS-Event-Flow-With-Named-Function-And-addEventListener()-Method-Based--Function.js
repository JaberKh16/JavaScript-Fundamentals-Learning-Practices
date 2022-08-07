/*
    JS Events Flow Between Named Function And addEventListener() Method
    ===================================================================
    When Named Function and addEventListener() method is used for a program
    then generally, as prefer to JS Engine work following this will be
    occur sequentially-

        1) Global Execution Context 
        2) Execution Context(Any Local Function)
        3) addEventListener()
*/

// declaring 'use strict' statement
'use strict';

// selecting a element
const h2Element = document.querySelector('header h2');
h2Element.addEventListener('click', function(){
    console.log('From click event.- addEventListener() method.');
});

function clickFire(){
    let delayingTime = new Date().getTime() + 1000;
    while( new Date() < delayingTime){}
    console.log('From named function- execution context(local function)'); 
}

clickFire();

console.log('Global Content Excution.')

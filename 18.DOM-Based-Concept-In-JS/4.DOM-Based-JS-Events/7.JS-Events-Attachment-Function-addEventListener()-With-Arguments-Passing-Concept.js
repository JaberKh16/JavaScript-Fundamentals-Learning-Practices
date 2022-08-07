/*
    addEventListener() Method Working With Arguments Passing Concept
    ================================================================
    Normally, arguments passing doesn't possible with the addEventListener()
    in any way with whatever function is being passed with the method.

    But combining of both ways of function passing can do the trick.

*/

// declaring the 'use strict' statement
'use strict';

// selecting the heading h2 element
const h2Element = document.querySelector('header h2');

// adding event through the addEventListener()
h2Element.addEventListener('click', function (){
    //console.log(event); // checking event information
    changeBackgroundPropertyClickEvent(h2Element, 'green'); // passing the parameter to the function
});

function changeBackgroundPropertyClickEvent(h2Element, elementColor){
    h2Element.classList.toggle('changeBackgroundProperty');
    console.log('Generated Color is: ' + elementColor);
};
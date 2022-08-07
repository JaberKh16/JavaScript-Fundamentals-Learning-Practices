/*
    JS Event Methods- addEventListener() Concept
    ============================================
    addEventListener() an Event attachment method which handles an specific element
    when some event triggered. 

    this method attach the events without overwriting the existing event handlers(means
    can handles multiple events to one specific element at a time.).

    Syntax:
        1) Element.addEventListener('event-name', anonymousFunction, boolean_value);
        2) Element.addEventListener('event-name', namedFunction, boolean_value);

*/

// declaring the 'use strict' statement
'use strict';

// selecting the heading h2 element
const h2Element = document.querySelector('header > h2');

// attaching an click event with addEventListener()
h2Element.addEventListener('click', changeBackgroundPropertyClickEvent);
    
function changeBackgroundPropertyClickEvent() {
    console.log('clicked, Changing the background color.');
    h2Element.classList.toggle('changeBackgroundProperty');
};
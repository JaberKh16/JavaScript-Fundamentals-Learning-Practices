/*
    JavaScript Event Object Concept
    ===============================
    JS Event Object is the object which is created whenever an event is happening.

    This Event Object basically tells all the information about the event which 
    is being triggered and provides all its internal methods and properties.

    When an Event Object is passed into a function it is often given a parameter
    which is generally expressed as either 'e' or 'event' as its full name.

*/

// declaring the 'use strict' statement
'use strict';

// selecting the heading h2 element
const h2Element = document.querySelector('header h2');

// adding event through the addEventListener()
h2Element.addEventListener('click', function (event){
    console.log(event); // checking event information
})
/*
    JavaScript Events Flow Basic Concept
    ====================================
    Events in JS, has the sequence which tells how those events have been occured when 
    multiple events have been triggered, those sequence of ordering is called Events Flow.

    Generally, JS Evnets occurs(fires) from inner child to outer child means means 
    inner element to outer element.

    
    Types of Events Flow
    --------------------
    Depending on the events firing nature Events Flow can be breakdown into two categories
    which are the following-

        1) Events Bubling-      Sequence of events firing from inner element to outer element, 
                                this is the default behaviour of events firing.
        
        2) Evnents Capturing-   Sequence of events firing from outer element to inner element,
                                can be set through the addEventListener() third parameter named
                                'boolean' which is normally 'false' means default, now set it 
                                to 'true'.

        3) Event Delegation-    Rather adding addEventListener() callback to every child elements directly
                                add this callback to parent element which reduce the cost of performance
                                issue when there's happen to be many child element being added callbacks.
*/

// declaring 'use strict' statement
'use strict';

// selecting multiple elements 
const parentElement = document.querySelector('#categories');


// Example-3: Event Propagation- setting e.stopPropagation() method: Stop Propagation
console.log('Example Of Event Delgation.......................');
parentElement.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);    // to get the targetted element instance
    console.log(e.target.id); // to get the targetted element instance id
});

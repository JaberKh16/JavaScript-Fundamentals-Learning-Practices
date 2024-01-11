/*
    JavaScript Event Delegation Basic Concept
    =========================================
    Rather adding addEventListener() callback to every child elements directly
    add this callback to parent element which reduce the cost of performance
    issue when there's happen to be many child element being added callbacks.


    Advantages Of Event Delegation
    ------------------------------
    1. Less Memory Consumption - attaching of single event handlers for child elements 
    2. Less Code- Reusability
    3. DOM Manipulation - 

    Disadvantage Of Event Delegation
    --------------------------------
    Some events are not propagating means there has no event
        
        a.Example Of events non bubbling:
            1. blur
            2. window.resize
            3. scroll
            4. focus
        b. use of stopPropagtion() method on element
        
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
    if(e.target.tagName === 'LI'){
        window.location.href = "/" + e.target.id;s
    }
});

/*
    Jquery Event Delegation and Event Propagation Concepts
    ======================================================
    Let's know about Jquery Event Delegation and Event Propagation related information
    which are being discuss through some examples see the following-

    Event Delegation
    ----------------
    Event Delegation is nothing but the missing elements for a parent element which are being selected
    to get to its descendants. This Event Delegation it allows to attach a single event listener to a 
    parent element so that it will fire for all descendants matching a selector whether those descendants
    initially are being existed or not being existed or maybe added later.

    Event Propagation
    -----------------
    Understanding how Event propagate is an important factor in being able to leverage Event Delegation.
    Any time one of the another tags is clicked, a click event is fired for that tag and then bubbles
    up to the DOM tree eventually triggering each of its parent click event handlers.

    For Example-
        <div>
            <ul id='list-items'>
                <li><a href='#'>Link-1</a></li>
            </ul> 
        </div>
    So when anchor tag <a> is being clicked it bubbles up to DOM tree like the following order-
        
            Order-1 ==> <a></a>
            Order-2 ==> <li></li>
            Order-3 ==> <ul id='list-items'></ul>
            Order-3 ==> <div></div>
            Order-4 ==> <body></body>
            Order-5 ==> <html></html>

    This bubbling basically called - "Event Bubbling" or another word "Event Propagation".

*/

// Event Delegation Example
$('.event-delegation__issue #list-items').on('click', function(eventObj){
    eventObj.preventDefault();
    console.log($(this).text());
    // console.log($(this));
})

$('#list-items').append("<li><a href='#'> Link-4 </a></li>");


// Event Delegation Example
// $('document')
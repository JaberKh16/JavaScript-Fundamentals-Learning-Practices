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


*/

$('document').ready(function(){
    $('.event-delegation__issue #list-items').on('click', function(eventObj){
        eventObj.preventDefault();
        console.log($(this).text());
        // console.log($(this));
    })
    
})

$('#list-items').append("<li><a href='#'> Link-4 </a></li>");
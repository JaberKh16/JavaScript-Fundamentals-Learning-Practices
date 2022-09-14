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

    For Example-
        <div>
            <ul id='list-items'>
                <li><a href='#'>Link-1</a></li>
            </ul> 
        </div>
        $('#list-items').on('click' function(e){
            e.preventDefault();
            console.log($(this).text()); // to see the text content
        });
        // adding a new item to the existing list
        $('#list-items').append("<li><a href='...'></a></li>");
    
    Now if this newly added list being clicked on nothing would happend becaue when the .on() method
    called this item it wasn't there so it doesn't the event handler.

    To resolve that do like the following-
        $('#list-items').on('click', 'a', function(){ // attaching a selector type when having any click event occur
            // code here
        });

    So, the 'selector' being specified thus it will look any kind of anchor tag whenever the click event
    has been triggered.


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


    Note: Event Delegation refers to the process of using Event Propagation to handle events at  a higher
    level in DOM than the element on which the event is originated. It allows to attach a event listener
    those element(basically descendants) which might be existed now or included in the future.

*/

// Event Delegation Example
$('.event-delegation__issue #list1-items').on('click', 'a', function(eventObj){
    eventObj.preventDefault();
    console.log($(this).text());
    // console.log($(this));
});

// adding a new item to the list
$('#list-items').append("<li><a href='#'> Link-4 </a></li>");


// Event Delegation Example-2
$('.event-delegation__issue #list2-items').on('click', "a[href^='http']", function(){
    // storing the event into a variable
    const element = $(this);
    
    // checking if the specified expression matches with is() method
    if(element.is("a[href^='http']")){
        element.attr('target', '_blank'); // then adding a new attribute to that element
    };
});


// // Event Delegation Example-2
// $('.event-delegation__issue #list2-items').on('click', "a[href^='http']", function(){
//     $(this).attr('target', '_blank'); // adding a new attribute to that element
// });
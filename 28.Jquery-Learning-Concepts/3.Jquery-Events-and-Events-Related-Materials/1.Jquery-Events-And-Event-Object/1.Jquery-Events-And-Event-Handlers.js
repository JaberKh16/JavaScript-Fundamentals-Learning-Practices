/*
    Jquery Events and Event Hanlders Concept
    ========================================
    Jquery provides some simple methods to work with events basically those methods attaches
    the event handlers(nothing but the function) to do particular task. Those handlers are 
    being called upon when the selector for that handler being triggered. Insied this
    handlers 'this' refers to the DOM element that initiated the event. This methods
    are also called 'Jquery Helper Functions'.
    
    Jquery event methods trigger or attach a function to an event handler for the selected
    element. Jquery simply provides a method named - on() to respond to any event on any
    selected elements which is called "Event Binding". 

    Event Binding Or Unbinding Based Methods
    ----------------------------------------
    Jquery other function like- bind() to attach an event handler to the selected element
    whereas unbind() function is used to detattach an event handler of that selected 
    element. In later, Jquery version these two methods are being replaced with
    on() and off() methods respectively. Event handlers associated with the on()
    method can be removed with the off() method. 
    
        a)  Event Binding- on() Method
            --------------------------
            jQuery allows you to attach an event handler for one or more events to the selected elements 
            using on() method. Internally all of the shorthand methods uses on() method. The on() method 
            gives you more flexibility in event binding. This on() method is replacement of 
            live() and delegate() method.


            Syntax-

                    on(types, selector, data, fn )
            
            Paramters-
            1) 'types'      --> one or more space-separated event types and optional namespaces
            2) 'selector'   --> selector string
            3) 'data'       --> data to be passed to the handler in event.data when an event is triggered.
            4) callback     --> a function to execute when the event is triggered. 

    Event Object
    ------------
    Jquery passes an event object to every event handler function. The event object includes important 
    properties and methods for cross-browser consistency.
    
    Event Object Properties
    -----------------------
    1) eventObj.value   --> gets the DOM element value that initiated the event.
    2) eventObj.type    --> gets the DOM element type that initiated the event.
    3) eventObj.target  --> gets the DOM element that initiated the event.
    4) eventObj.pageX   --> mouse position at the time the event occurred, relative to the top left of the page on x axiswise
    5) eventObj.pageY   --> mouse position at the time the event occurred, relative to the top left of the page on x axiswise
    6) eventObj.which   --> determines which button or key that was pressed.
    7) eventObj.data    --> Any data that was passed in when the event was bound.

    Event Object Methods
    --------------------
    1) preventDefault()     --> prevents the default action of the event.
    2) stopPropagation()    --> stops the event from bubbling up to other elements. 


*/


// single element binding example
$('document').ready(function(){
    // use of on() to attach event handler
    $('.bind-button').on('click', function(){
        $('#content').css('font-size', '20px');
        $('#content').css('color', '#dd23bb');
    });
    // use of off() to deattach event handler
    $('.unbind-button').click(function(){
        $('#content').off('click', ':first', function(){
            $('#content').css('font-size', '16px');
            $('#content').css('color', '#000000');
        });
    });
    
});


// multiple element binding example
$('document').ready(function(){
    $('.multiple-binding').on('click', ':button', function(eventObj){
        alert(`${eventObj.target.value} button selected.`);
    })
});

// binding through named function
const onMouserOver = function(){
    alert('Changes of color..');
    $('.div-element_content').css('color', '#44ccdd');
}

$('#div-element').on('mouseover', onMouserOver);



// binding multiple events with multiple handlers
$('document').ready(function(){
    $('.multipleeventsacttion').on({
        mouseenter: function(eventObj){
            console.log(`${eventObj.target.tagName} has on mouse enter action`);
            // console.dir(eventObj)
        },
        mouseleave: function(eventObj){
            console.log(`${eventObj.target.tagName} has on mouse leave action`);
        },
        click: function(eventObj){
            console.log(`${eventObj.target.tagName} has on click action`);
        }
    });
});


// biding non-existing element(Event Delegation)
$('document').ready(function(){
    $('.event-delegation__binding ul').on('mouseover',  function(eventObj){
        console.log(`Something in a ${eventObj.target.tagName} was clicked, and we detected that it was an ${eventObj.target.tagName} element.`);
    });

    // creating new items to add into the list
    $('.event-delegation__list').append('<li> Item-1 </li>');
    $('.event-delegation__list').append('<li> Item-2 </li>');
});

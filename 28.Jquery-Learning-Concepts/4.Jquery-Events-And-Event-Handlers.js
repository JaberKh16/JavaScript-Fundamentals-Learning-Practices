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
    1) eventObj.value
    2) eventObj.type
    3) eventObj.target
    4) eventObj.pageX
    5) eventObj.pageY e.g. target, pageX, pageY, relatedTarget etc.

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
        $('#content').off('click');
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

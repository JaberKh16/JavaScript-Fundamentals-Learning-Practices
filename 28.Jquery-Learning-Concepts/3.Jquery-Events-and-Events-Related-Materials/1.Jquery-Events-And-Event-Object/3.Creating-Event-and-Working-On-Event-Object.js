/*
    jQuery Event Creation and Event Object Based Concepts
    =====================================================
    Jquery's Event System normalises the Event Object according to W3C standards. The Event
    Object is guranteed to be passed to the event handler(which is why without event creating
    any event object we can have access to the event object for that particular event handler
    when working with the events). Most properties from the original event are copied and
    normalised to the new Event Object.
    
    jQuery.Event Constructor
    -----------------------
    jQuery.Event constructor is used to create a event object which is exposed and can be
    used when calling .trigger() method.
    To create a event do the following-
        
        var eventObj = jQuery.Event('eventtype'); // 'new' Operator is optional

    As of jQuery 1.6 version, can also pass an object to the jQuery.Event constructor and its
    properties will be set on the newly created Event Object.

        var eventObj = jQuery.Event('eventtype', {propertyName:propertyValue} );

    Event Object Common Properties
    ------------------------------
    1) target                       --> returns the DOM element that initiated the event.
    2) relatedTarget                --> returns the other DOM element is involved in the event, if any.
    3) pageX, pageY                 --> returns the mouse position relative to the left and right edge of the document.
    4) metaKey                      --> indicated whether a META key was pressed when the event fired.
    5) which                        --> returns for key or mouse events, this property indicates the specific key or button 
                                        that was pressed.

    Event Object Other Properties
    -----------------------------
    1) event.currentTarget          --> to get the current DOM element within the Event Bubbling phase
    2) event.data                   --> an optional object of data that is being to an event method when 
                                        executing handler is bounded(attached).
    3) event.delegateTarget         --> the element where the currently-called jQuery event handler was attached.
    4) event.namespace              --> the namespace specified when the event was triggered.
    5) event.result                 --> the last value returned by an event handler that was triggered by this event, 
                                        unless the value was 'undefined'.
    6) event.type                   --> describes the nature of the event.
    7) event.timeStamp              --> returns the difference in milliseconds between the time the browser actually 
                                        created the event and January 1, 1970.


    
    Event Object Other Methods
    --------------------------
    1) event.preventDefault()                   --> if this method is called, the default action of the event will not be triggered.
    2) event.isDefaultPrevented()               --> returns whether event.preventDefault() was ever called on this event object..
    3) event.stopPropagation()                  --> prevents the event from bubbling up the DOM tree, preventing any parent handlers 
                                                    from being notified of the event.
    4) event.isPropagationStopped()             --> returns whether event.stopPropagation() is ever called on this event object.
    6) event.stopImmediatePropagation()         --> keeps the rest of the handlers from being executed and prevents the event 
                                                    from bubbling up the DOM tree.
    5) event.isImmediatePropagationStopped()    --> returns whether event.stopImmediatePropagation() was ever called on this event object

*/

// creating a event object
const eventObj = new jQuery.Event('click');
console.log(eventObj); // seeing the new creted event object properties and methods

jQuery('div').trigger(eventObj); // to trigger the event on 'div' which can be found in - 'eventObj.target' 
console.log(eventObj.target);
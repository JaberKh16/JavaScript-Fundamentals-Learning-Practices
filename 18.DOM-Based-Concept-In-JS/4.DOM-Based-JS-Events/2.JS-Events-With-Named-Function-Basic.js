/*
    JavaScript Events Based Concept With Anonymous Function
    =======================================================
    Lets first talk about JS Events,

    JS Events Concept
    -----------------
    An Action that happen on web page while client are interacting with the 
    page. It makes the web page more interactive and dynamic to the client
    while interaction happens.
    
    Events are similar like function calling which says in order to execute functions
    need to call them, same happens with this case where invoking of function manage by 
    user behaviour(such as clicks on button, presses on keyboard, movement of mouse etc..).


    In JS, Events can be attached in two ways which are the following-

        1) With Anonymous Function Along with the Event Name
        2) With Named Function Along with the HTML Tag Attribute Declaring
    
    See the syntax for both of the ways in the following-
        Syntax:
            
            1)  Element.EventName = AnonymousFunction(){

                };
            
            2) <tag eventAttribute="functionName()"></tag> // defining an eventAttribute in the HTML Tag for which the event should triggered
                function functionName(){

                };

    
    Note: Attaching the event name with the HTML Tag has a disadvantage which is if multiple
    events having the same name even with different functions, then only the first event will
    be triggered. To solve the issue addEventListener() method can be used which support this
    multiple events trigger even if the events have exact same name. 
*/

// declaring the 'use strict' statement
'use strict';

// selecting the header element
const h2Element = document.querySelector('header h2');

// setting the event and change the color
function changeBackgroundPropertyOnClickEvent(){
    h2Element.classList.toggle('changeBackgroundProperty');
};

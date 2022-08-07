/*
    DOM Styling With Object Based Property 'cssText' Concept
    ========================================================
    DOM Styling With Object Based Properties allows to change the CSS Styling of an element
    where that styling is being done through DOM Based Styling Object- 'style' .
    
    This 'style' object based styling allows us to style the element dynamically where
    CSS Based Styling mostly does the static based styling to the page. It basically
    uses the JS based properties to style the element.

    Syntax:

        let elementName = document.some_method();
        elementName.object.property;   
    
    In the above, lets explain the syntax -

        elementName --> here, 'elementName' can be any HTML element selected through DOM Selector
        object      --> here, 'object' is the DOM Styling Object  'style' .
        property    --> here, 'property' is .cssText propety
    
    
    this .cssText property allow to change the multiple CSS styling simultaneously where with
    other JS styling based properties single element styling can be possible. 

    this .cssText property removes the previous inline styling if has any and replaced with new
    inline styling.

    Multiple CSS styling can be separated through semicolon(;) like the following-

        elementName.object.cssText = "background-color:green; font:20px";

    See the above, this property allows us to use the CSS based styling properties directly
    through JavaScript.
    
*/

// declaring the 'use strict' statement
'use strict'

// selecting the header element
let h2Element = document.querySelector('header h2');

// styling the header element through .cssText property
h2Element.style.cssText = 'background-color:#34ff00; font-size:30px; color:white'; 


// selecting the list element
let listElements = document.querySelectorAll('ul li');

// styling the list elements through .cssText property
listElements.forEach( function(listItem){
    console.log(listItem); // prints the individual HTML list element
    listItem.style.cssText = 'background-color: blue; font-size: 15px; color:white'; 
});


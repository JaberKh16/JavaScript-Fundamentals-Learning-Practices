/*
    DOM Styling With Object Based Properties Concept
    ================================================
    DOM Styling With Object Based Properties allows to change the CSS Styling of an element
    where that styling is being done through DOM Based Styling Object- 'style' .
    
    This 'style' object based styling allows us to style the element dynamically where
    CSS Based Styling mostly does the static based styling to the page. It basically \
    uses the JS based properties to style the element.

    Syntax:

        let elementName = document.some_method();
        elementName.object.property;   
    
    In the above, lets explain the syntax -

        elementName --> here, 'elementName' can be any HTML element selected through DOM Selector
        object      --> here, 'object' is the DOM Styling Object  'style' .
        property    --> here, 'property' can be any JS Styling Based Properties 
    
    When using the DOM Styling Object to style the element, it creates a 'inline styling' to
    that specific element, can be seen through the HTML document where that specific element
    is being styled through 'inline styling'.


    Now, some few notes to be taken when styling element with the DOM Based Styling-

    1) when property name has single word in it then use the property name as it is with the 'style' object
    2) when property name has multiple word in it, then use the Camel Casing technique.


    Note: With this JS based properties styling only a single element property styling can be
    possible at a time.

*/

// declaring the 'use strict' statement
'use strict'

// selecting the header element
let h2Element = document.querySelector('header h2');

h2Element.style.color = 'white'; // property name has the single word in it

h2Element.style.backgroundColor = '#34ff00'; // property name has the multiple word in it

/*
    HTMLElement DOM Attribute Based Methods Concept
    ===============================================
    There are some methods to work with the HTMLElement DOM, which are
    basically used to set or get the HTML elements attributes.
    
    Syntax:
        HTMLElement.attributeMethods('attr');

    
    Methods
    -------
    a)  getAttribute('attr') 
        
        1) returns the value of the attribute with the specified name of the element. 
        2) return value type is 'string'. 
        3) This method is case sensitive if the specified attribute name doesn't match 
        then it returns the value as "null" . 

    b) removeAttribute('attr') 
        
        1) removes the attribute of the specified name of the element. 
        2) return value type is 'string'. 
        3) This method is case sensitive if the specified attribute name doesn't match 
        then it returns the value as "null" .

    c) setAttribute('attr', value) 
        
        1) set the value of an attribute on the specified name of the element. 
        2) if the attribute value is already exists, then the attribute value is updated 
        otherwise a new attribute is included with the specified attribute name along with 
        specified value.

    d) hasAttribute('attr') 
        
        1) to check whether the specified attribute is setted for the specified element or not. 
        2) return value as boolean value.
*/

// declaring 'use strict' statement
'use strict';

// selecting elements from the form section
const buttonElement = document.getElementById('add-btn');
const inputElement = document.getElementById('add-input');

buttonElement.addEventListener('click', function(event){
    console.log('Clicked on the submit buttion.'); // generally, button element has refresh issue means after a click it will refresh the page
                                                   // thus blinkcing of the output can be seen and to resolve that use prevenDefault() method
    event.preventDefault(); // solve the blinking issue
})
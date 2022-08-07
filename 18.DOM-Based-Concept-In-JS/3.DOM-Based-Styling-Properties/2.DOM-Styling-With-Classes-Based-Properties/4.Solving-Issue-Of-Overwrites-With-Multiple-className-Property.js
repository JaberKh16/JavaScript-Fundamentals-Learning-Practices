/*
    DOM Styling With Classes Based Properties Concept
    =================================================
    DOM Styling with Classes Based Properties is more flexible than the DOM Styling
    with Object Based Properties because its avoid much typing issue.

    To work with the DOM Styling with Classes Based Properties there are two 
    types properties which can be used are the following:
            
            1) className
            2) classList

    a) className Property
    ----------------------
    this property gets and sets the value of a class attribute of the specified element
    means it sets or returns the class name of an element.

    it returns the value as a string type value.

    Syntax:
        Element.propertyName = 'class_name'; 
    
    In the above syntax, lets demonstrate it,
        Element ---> here, 'Element' is the HTML element
        propertyName  ---> here, 'propertyName' is the 'className' property

    
    Steps to work with the className Property
    -----------------------------------------
    1) first create some class based properties inside the .css file
    2) then select those newly created classes through the following way-

            let elementName = document.querySelector('header h2');
            elementName.className = 'newly_created_class_name';
        
    Note: This className property has a single issue which is when the second class 
    attributes has been added through JS, then it removes the first class styling 
    basically overwrites the second class with first class property.
    For example:
        let h2 = document.querySelector('header h2');
        h2.className = 'changeBackground';
        h2.className = 'changeFontSize'; // only this property will be applied thus previous one will be overwritten

    Although, this issue can be solved with the simple idea of appending technique as the follows-
        let h2 = document.querySelector('header h2');
        h2.className = 'changeBackground';
        h2.className += ' changeFontSize'; // need to provide a single space thus CSS multple classes has a single space between them


    b) classList Property
    ---------------------
    this property returns the class name(s) of an element as a 'DOMTokenList Object'.
    
    It is useful to add, remove and toggle CSS classes on an element through multiple 
    method.

    classList property is read-only based property.

    DOMTokenList Object Concept
    ---------------------------
    1) it is an array-like object that has an index based accessing technique
    2) index value starts from 0.
    3) has property "length".\

    Syntax:
        Element.classList.some_method('class_name');
    
    In the code above, lets demonstrate it in the following-

        Element         --> here, 'Element' is the HTML element
        classList       --> here, 'classList' is the property
        some_method()   --> here, 'some_method()' is the DOM based selector
    
    Some classList Property Based Methods
    -------------------------------------
    1) classList.add('class-name');      // to add class in the DOMTokenList Object
    2) classList.remove('class-name');   // to remove class from the DOMTokenList Object
    3) classList.toggle('class-name');   // to remove class it its exits in the DOMTokenList Object, 
                                            otherwise creates a new class with that specified class name
*/

// declaring the 'use strict'statement
'use strict';

// selecting the header element
const h2Element = document.querySelector('header h2');

h2Element.className = 'changeBackgroundProperty'; // changing the CSS Class Property 'changeBackgroundProperty'

h2Element.className += ' changeFontSizeProperty'; // appending with the previous class property 
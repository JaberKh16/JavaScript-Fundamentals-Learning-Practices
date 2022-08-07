/*
    DOM Method: document.getElementByClassName('class_value').innerHTML
    ===================================================================
    .innerHTML property used to change the HTML Content of an HTML tag or element.
    It will get the whole HTML content of the specified node(such as tag itself, 
    attributes and text nodes and represented as a string value).

    To work with the .innerHTML, first need to get the HTML element with
    any DOM Selector method and then use the .innerHTML property to change
    the HTML Content.

    Syntax:
        document.getElementById('id_value').innerHTML = "" ; provide any string value inside ""


    .innerHTML property will write the HTML Tag as HTML Code if its being assigned as a value,
    which is a single difference with .textContent property.
*/

// Declaring 'use strict' statement
'use strict';

// Gettting The Element 'h2' Through DOM Method
let movieTitle = document.getElementsByClassName('movie-title');
console.log(movieTitle);

// Changing The Inner HTML Content Of That Title
movieTitle.innerHTML = "<b>Marvel Phase-4 Recent Movie</b><br><br>"; // innerText="" will chnage the inner content of the content

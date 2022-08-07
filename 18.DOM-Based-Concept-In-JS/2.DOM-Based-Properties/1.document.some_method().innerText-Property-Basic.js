/*
    DOM Method: document.getElementByClassName('class_value').innerText
    ===================================================================
    innerText property used change the inner content of an HTML element.
    To work with the innerText, first need to get the HTML element with
    any DOM Selector method and then use the innerText property to change
    the content of that particular element.

    Syntax:
        document.getElementById('id_value').innerText = "" ; provide any string value inside ""

*/

// Declaring 'use strict' statement
'use strict';

// Gettting The Element 'h2' Through DOM Method
let movieTitle = document.getElementsByTagName('h2');
console.log(movieTitle);

// Changing The Inner Text Of That Title
movieTitle.innerText = "Marvel Phase-4 Recent Movie"; // innerText="" will chnage the inner content of the content
// document.write(movieTitle.innerText);
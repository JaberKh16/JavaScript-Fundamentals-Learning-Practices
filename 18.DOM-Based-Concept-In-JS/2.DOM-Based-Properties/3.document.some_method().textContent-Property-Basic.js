/*
    DOM Method: document.getElementByClassName('class_value').textContent
    ======================================================================
    .textContent property used to sets or returns the textual content of the
    specified node and along with its all descendants(means it will only gets 
    the textual content of the specified node and its descendants if have any).
    
    To work with the .textConent, first need to get the HTML element with
    any DOM Selector method and then use the .textContent property to change
    the HTML Content.

    Syntax:
        document.getElementById('id_value').textContent = "" ; provide any string value inside ""

    .textContent property will write the HTML Tag as it is if its being assigned as a value,
    which is a single difference with .innerHTML property. Means it will write as a textual 
    content whatever its being assigned through it.
*/

// declaring 'use strict' statement
'use strict';

// getting the list items from the document
let listElements = document.querySelector('ul');
//console.log(listElements);

const contentInsideList = listElements.textContent; 
console.log(contentInsideList); // to see the textual conent 

// now changing the textual content inside the list
const changedContent = listElements.textContent = "<b>Marvel Phase-4 Recent Movie</b><br><br>"; // innerText="" will chnage the inner content of the content
console.log(changedContent);
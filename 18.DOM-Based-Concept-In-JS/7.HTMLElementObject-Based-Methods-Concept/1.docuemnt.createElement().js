/*
    HTML Element Object Based Method- document.createElement()
    ==========================================================
    document.createElement() is used to create a HTML Element.
    This only create the element means the tag only.
    Syntax-
        document.createElement(element);

*/

// defining the 'use strict' statement
'use strict';

// taking the list items
const listItems = document.getElementById('add-notes');
// console.log(listItems);


// creating a button element
const buttonElement = document.createElement('button');
console.log(buttonElement)
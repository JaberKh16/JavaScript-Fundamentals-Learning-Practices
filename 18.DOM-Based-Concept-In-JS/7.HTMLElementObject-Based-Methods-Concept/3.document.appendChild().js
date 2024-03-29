/*
    HTML Element Object Based Method- document.append()
    ==========================================================
    document.append() is used to append a HTML Element.
    Syntax-
        document.append(element);

*/

// defining the 'use strict' statement
'use strict';

// taking the list items
const listItems = document.getElementById('add-notes');
// console.log(listItems);


// creating a button element
const buttonElement = document.createElement('button');
// console.log(buttonElement)

// adding a textual note inside the newly created element
const textContent = document.createTextNode('click me');

// appending the textual content with the newly created element
buttonElement.appendChild(textContent);
buttonElement.setAttribute('style', 'display:block; margin::10px auto;padding:5px 10px; background:green;' );

console.log(buttonElement);
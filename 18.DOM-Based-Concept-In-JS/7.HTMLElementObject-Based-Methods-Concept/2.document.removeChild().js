/*
    HTML Element Object Based Method- document.removeChild()
    ==========================================================
    document.removeChild() is used to remove a HTML Element.
    Syntax-
        document.removeChild(element);

*/

// defining the 'use strict' statement
'use strict';

// taking the list items
const listItems = document.querySelector('ul');
// console.log(listItems);


// // creating a button element
// const buttonElement = document.createElement('button');
// // console.log(buttonElement)

// // adding a textual note inside the newly created element
// const textContent = document.createTextNode('click me');

// // appending the textual content with the newly created element
// buttonElement.appendChild(textContent);
// buttonElement.setAttribute('style', 'display:block; margin::10px auto;padding:5px 10px; background:green;' );

// console.log(buttonElement);

// selecting the last element which is <li> for 'third note' which will be deleted 
const lastItem = listItems.lastElementChild;
console.log(lastItem);

// to remove a child need to first get its parent element then remove that child element
const removedItem = lastItem.parentElement.removeChild(lastItem);
console.log(removedItem); // returns the removed child data
console.log(listItems); // finally seeing the avaialble lists

/*
    DOM Navigational Elements- HTMLElement.parentNode
    =================================================
    HTMLElement.parentNode is used to get the parent node of 
    the specified element.

*/

// defining the 'use strict' statement
'use strict';

// taking the list items
const listItems = document.querySelector('li');
console.log(listItems);

// getting the parent node 
const parentNodeOfListItems = listItems.parentNode;
console.log(parentNodeOfListItems);
/*
    DOM Navigational Elements- HTMLElement.children
    =================================================
    HTMLElement.children is used to get the "HTMLCollection" of child
    elment information, excluding #textnode/textual data(basically the
    whitespaces surround with each items while arranging each <li> elements
    in different line).

    #textnode - whitespaces, tab, newline 

    HTMLElement.children returns a HTMLCollection.

    DOM Navigational Properties
    ---------------------------
    a)  nodeType
        - specifies the type of the node.
        - read-only property.
        - returns value as integer value for each of the nodes.
    b) nodeValue
        - specifies the value of a node.
        - nodeValue for "Element Node" is 'null'
        - nodeValue for "Text Node" is text itself.
        - nodeValue for "Attribute Node" is the attribute value.
    c) nodeName
        - specifies the name of the node.
        - read-only property.
        - nodeName of an "Element Node" is the same as tag name.
        - nodeName of the "Document Node" is always the #document.
        - nodeName of the "Text Node" is the #textNode
        - nodeName always contains the uppercase tag name of a HTML Element.

*/

// defining the 'use strict' statement
'use strict';

// taking the list items
const listItems = document.querySelector('ul');
// console.log(listItems);

// getting the children elements 
const childsOfListItems = listItems.children;
console.log(childsOfListItems);

for(let i=0; i<childsOfListItems.length; i++){
    console.log(childsOfListItems[i].nodeName); // element nodeName is 'List'
}
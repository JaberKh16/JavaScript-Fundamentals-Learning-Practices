/*
    DOM Navigational Elements- HTMLElement.nextElementSibling
    =========================================================
    HTMLElement.nextSibling is used to get the next sibling 
    element excluding textnode if have any.

    #textnode - whitespaces, tab, newline 


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
console.log(listItems);

// getting the next element sibling node 
let nextSiblingItem = listItems.nextElementSibling;
console.log(nextSiblingItem);
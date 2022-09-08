/*
    HTML Element Object Based Method- document.replaceChild()
    ==========================================================
    document.replaceChild() is used to replace a HTML Element.
    This method replace one HTML element with another HTML element.
    
    Syntax-
        document.replaceChild(newChild, oldChild);

    Warning: If the new node is already present somewhere else in the DOM, it is first removed from that position

    Return value: The replaced Node. This is the same node as oldChild.

    Exceptions Might Occur
    ----------------------
    a)  HierarchyRequestError DOMException Thrown when the constraints of the DOM tree are violated, 
        that is if one of the following cases occurs:

        1)  If the parent of oldChild is not a Document, DocumentFragment, or an Element.
        2)  If the replacement of oldChild by newChild would lead to a cycle, that is if newChild is an 
            ancestor of the node.
        3)  If newChild is not a DocumentFragment, a DocumentType, an Element, or a CharacterData.
        4)  If the current node is a Text, and its parent is a Document.
        5)  If the current node is a DocumentType and its parent is not a Document, as a doctype 
            should always be a direct descendant of a document.
        6)  If the parent of the node is a Document and newChild is a DocumentFragment with more 
            than one Element child, or that has a Text child.
        7)  If the replacement of oldChild by newChild would lead to Document with more than one Element as child.
        8)  If the replacement of oldChild by newChild would lead to the presence of an Element node before 
            a DocumentType node.
    b)  NotFoundError DOMException Thrown if the parent of oldChild is not the current node.

*/


// Create an empty element node
// without an ID, any attributes, or any content
const newSpanElement = document.createElement("span");
// console.log(newSpanElement); // seeing the 'newSpanElement'

// give it an id attribute called 'newSpan'
newSpanElement.setAttribute('id', 'newSpan');
newSpanElement.setAttribute('type', 'text');


// create some content more for the new element.
const spanElementContent = document.createTextNode("new replacement of previous span element.");

// append that text node to that newly created 'newSpanElement' 
newSpanElement.appendChild(spanElementContent);
console.log(newSpanElement); // seeing the 'newSpanElement' after the appending text node

// build a reference to the existing node to be replaced
const existingSpanElement = document.getElementById("childSpan");
console.log(existingSpanElement);
const parentDiv = existingSpanElement.parentNode;
parentDiv.style.cssText = "border:2px solid #44fc3f";

// replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(newSpanElement, existingSpanElement);

/*

    DOM Method: document.getElementsByTagName('tag_name')
    ====================================================
    document.getElementsByTagName('tag_name') method is used to get the HTML
    element by their tag keyword. This method returns a collection of all 
    elements in the document with the specified tag name.
    
    getElementsByTagName() method is case sensitive if not found any matches
    then it return "null" as a value, otherwise if found then returns 
    a "HTML Collection".

    HTML Collection Concept
    -----------------------
    1) HTMLCollection is a collection of document elements.
    2) similar like array that has index based accesing technique.
    3) index value starts from 0.
    4) has property 'length'.
    5) HTMLCollection items can be accessed by their name, id or index number.
    6) always a live collection- means supports live inclusion of element.
    
*/

// Declaring 'use strict' statement
'use strict';

// Gettting The Element 'h2' Through DOM Method
let movieSection = document.getElementsByTagName('div');
console.log(movieSection);

// Changing The Inner Text Of That Title
movieSection[0].innerText = "Marvel Phase-4 Recent Movie"; // innerText="" will chnage the inner content of the content

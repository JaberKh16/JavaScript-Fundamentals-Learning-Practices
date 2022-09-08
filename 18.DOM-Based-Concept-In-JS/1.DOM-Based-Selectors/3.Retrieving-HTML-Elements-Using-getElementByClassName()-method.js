/*
    DOM Method: document.getElementByClassName('class_name')
    ========================================================
    document.getElementByClassName('class_value') method is used to get
    the HTML element by their class name. This method returns a collection 
    of all elements in the document with specified class name.
    
    Basically returns an array like object of all child elements which have all
    the given class name, array-like collection is not actually an array so dont
    be confused about it, instead its a "HTMLCollection". 
    

    getElementByClassName() method is case sensitive if not found any matches
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

    Converting HTMLCollection Into An Array Object
    ----------------------------------------------
    To convert HTMLCollection into an array use the method name-
            
            Array.from(array-like-object); // converts the HTMLCollection into an Array Object
    
*/

// Declaring 'use strict' statement
'use strict';

// Gettting The Element 'h2' Through DOM Method
let movieSection = document.getElementsByClassName('movie-section');
console.log(movieSection);

// Changing The Inner Text Of That Title
movieSection.innerText = "Marvel Phase-4 Recent Movie"; // innerText="" will chnage the inner content of the content


// Loop through the HTMLCollection
Array.from(movieSection).forEach((item)=>{
    console.log(item); // returns the <div> because having that element only
})
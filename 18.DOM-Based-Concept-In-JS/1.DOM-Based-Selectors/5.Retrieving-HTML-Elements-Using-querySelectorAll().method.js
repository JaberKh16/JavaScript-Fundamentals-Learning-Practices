/*
    DOM Method: document.querySelectorAll('selector)
    ================================================
    document.querySelectorAll() method returns all elements in the document
    that matches a specified CSS Selector. This method basically returns a
    "NodeList" which is an array-like object.

    querySelectorAll() method can be used to select multiple elements with 
    multiple selectors mentioned separated by commas(,).
    
    NodeList Concept
    ----------------
    1)  similar like HTMLCollection that has index based accesing technique.
    2)  index value starts from 0.
    3)  has property 'length' .
    4)  difference with "HTMLCollection" is that it allows us to use Array.forEach()
        method directly without even transforming it to an array. Although its not
        an array so can't use array based method with it, without transforming it
        to an array.

    
*/

// declaring 'use strict' statement
'use strict';

// selecting multiple selector with querySelectorAll() method
let listOfSelectors = document.querySelectorAll('li'); // selecting HTML List
console.log(listOfSelectors);

// looping through with forEach() method
listOfSelectors.forEach(function (list){
    console.log(list)
})


/*
    DOM Method: document.querySelector('selector')
    =============================================
    document.querySelector() method returns the first element that matches
    a specified CSS Selector in the document. This method basically takes
    a single string argument named 'selector'.

    querySelectorAll() method is case sensitive, if not found any matches then
    returns "null" as value.
    
    Different Ways of Selecting Selectors
    -------------------------------------
    1)  using directy the selector name.
    2)  using the id selector (e.g -->    #id-name).
    3)  using the class selecor (e.g -->  .class-name).
    4)  using the descendent selector (parent-selector  descendant-selector).  
    
*/

// declaring 'use strict' statement
'use strict';

// selecting multiple selector with querySelectorAll() method
let listSelector = document.querySelector('li'); // selecting HTML List
console.log(listSelector);
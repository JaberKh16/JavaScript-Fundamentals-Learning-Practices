/*
    JavaScript BOM Based Objects - window.history Object
    ====================================================
    window.history Object provides the information about the browser history.
    If wanted can directory write 'history' to work with the window.history Object
    which is possible because 'window' Object has the global scope.


    Note: To protect the client privacy, modern browser limited some access over
    the browser history.
    
    window.history Object Based Methods
    ----------------------------------
    1) history.forward()   --> to loads the next URL from history list.
    2) history.back()      --> to loads the previous URL from history list.
    3) history.go()        --> to loads specified URL.

    window.history Object Based Properties
    --------------------------------------
    1) history.length     --> to get the available history list length;

*/

// getting the window Object and store it to a variable
var windowHistObj = this.history;

console.log(windowHistObj);


// working with "history" Object some methods
console.log(windowHistObj.forward(1)); // resulted 'undefined' because trying to forward through localhost 
console.log(windowHistObj.back()); // resulted 'undefined' because trying to forward through localhost 
console.log(windowHistObj.go(-4)); // resulted 'undefined' because trying to forward through localhost 


// getting the no. of pages contains the history Object
var historyPageLength = windowHistObj.length;
console.log(historyPageLength);  // resulted 1 because localhost is the only URL is in the history Object
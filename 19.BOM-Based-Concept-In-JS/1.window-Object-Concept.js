/*
    JavaScript BOM Based Objects - window Object
    ============================================
    'window' Object is one of the JS BOM based object which is used to interact
    with the browser window.

    'window' Object has the global level scope which contains many methods and
    properties. Also, before ES6 means in ES5 and before all other versions
    variables and functions has the global scope menas those can be accessed
    through the 'window' Object. If wanted then can also check through 
    browser "inspect" option and then go the console and write window
    which will returns the 'window' Object information.

    "window" Object some properties
    -------------------------------
    1) window.innerHeight --> provides window height in px.
    2) window.innerWidth  --> provides window width in px.

    "window" Object some methods
    ----------------------------
    1) window.open()        --> to open a new window.
    2) window.close()       --> to close the current window.
    3) window.moveTo()      --> to move the current window.
    4) window.resizeTo()    --> to resize the current window.


*/



// getting the window Object 
var windowObj = this; // because 'this' generally refers to window if defined in global scope
console.log(windowObj);

// checking the window Object height and width
console.log(windowObj.innerHeight);
console.log(windowObj.innerWidth);


// checking some of the window Object methods
console.log(windowObj.open());
console.log(windowObj.moveTo(500, 200));
console.log(windowObj.resizeTo(500, 200));
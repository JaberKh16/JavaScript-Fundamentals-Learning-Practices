/*
    JavaScript Web History API
    ==========================
    Web History API provides easy methods to access to the browser history
    through 'window.history' object.

    'window.history' objects contains all the information about the URLs
    visited through the browser by client.

    History Object Methods
    ---------------------- 
    1) back()   --> loads the previous URL from the history list.
    2) foward() --> loads the next URL from the history list.
    3) go()     --> loads a specific URL from the history list.

    History Object Property
    -----------------------
    1) length   --> returns the no. of URL in the history list.

*/

// defining the 'use strict' statement
'use strict';

// getting the button selected
document.getElementById('forward-url').addEventListener('click', function(){
    history.forward();
})

document.getElementById('backward-url').addEventListener('click', function(){
    history.back();
})

document.getElementById('forward-url').addEventListener('click', function(){
    history.go(3);
})

document.getElementById('history-list').addEventListener('click', function(){
    const historyList = history.length;
    console.log(historyList);
    document.getElementById('history-available').innerHTML = historyList;
})
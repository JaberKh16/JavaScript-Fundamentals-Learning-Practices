/*
    DOM Method: document.getElementById('id_name')
    ===============================================
    document.getElementById('id_value') method is used to get the HTML
    element by their identifier(id) means it basically returns the that
    has the ID attribute with the specified value.

    getElementById() method is case sensitive if not found any matches
    then it return "null" as a value.

    Note: In case of multiple same name identifier(id) has been found then
    getElementById() selects the first one which means the one which appear
    first in the HTML document sequence.
    
*/

// Declaring 'use strict' statement
'use strict';

// Gettting The Element 'h2' Through DOM Method
let movieTitle = document.getElementById('movie-title');
console.log(movieTitle);

// Changing The Inner Text Of That Title
movieTitle.innerText = "Marvel Phase-4 Recent Movie"; // innerText="" will chnage the inner content of the content

/*
    Assigning Default Value Through Destructor
    ==========================================
    With Destructor Concenpt, assigning a default value becomes convinient when
    there is no value or 'undefined' for the array element.
    

    Note: While providing a default value with destructor always provide
    the variable with default as last item, otherwise 'undefined' case might
    occur, though ordering is matter in this case.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array with destruction concept having a default value
let [apple, carrot, banana='banana'] = ["apple", 'carrot'];
console.log(`${apple}, ${banana}, ${carrot}`); 
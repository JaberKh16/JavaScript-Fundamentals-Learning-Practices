/*
    Destructing An Array With 'rest' Parameter
    ==========================================
    Destructing an array with 'rest' parameter can be possibel
    in JS. 
    'rest' Parameter is used to map out the leftover elements of an array
    in a new array. 'rest' Parameter must be the last variable in the
    destructing syntax.

    To declare it need to use three dot(...rest) to denote the
    'rest' Parameter itself.
    For Example:
        
        let [tomato, mush, ...rest] = ['tomato','mush', 'fish', 'fruit', 'carrot'];
    
    In the above code, '...rest' denotes the leftover elements in the destructive array
    means 'rest' will hold,  ...rest = ['fish', 'fruit', 'carrot'];
    though those elements doesn't get individual destruction variables to hold their value.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an destructive array
let [tomato, mush, ...rest] = ['tomato','mush', 'fish', 'fruit', 'carrot'];
console.log(`Other Invidual Elements Variable Value: ${tomato}, ${mush}`);
console.log(`Rest Parameter Holds Array: ${rest}`);
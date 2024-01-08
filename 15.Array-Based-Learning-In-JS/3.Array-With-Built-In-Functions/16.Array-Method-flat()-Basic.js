/*
    Array Method: array.flat()
    ==========================
    flat() method takes an array and flattend it to its 1D array. It's flat everything inside even
    if have the any level order of array items and then flatted it to 1D array alike.

    flat() doesn take single parameter but which is optional and as a return value 
    returns the flatten array.

    Syntax:
        array.flat(level:optional)

    'level' defines how deep level we wanted the array to be flatted means if-
        1. array having 2D array - flatten to 1D
        2. array having 3D array - need 'level' value 2 to flatten to 1D 
    
        and likewise.

*/

// declaring 'use strict' statement
'use strict';

// declaring the array
const fruits = ['mango', 'apple', 'orange', 'pineapple', 'guava', [1, 2, 4, {user: '2', password: '123'}]];
const flattedFruits = fruits.flat();
console.log(flattedFruits);

const randomItems = ['mango', 'apple', 'orange', 'pineapple', 'guava', [1, 2, 4, {user: '2', password: '123'}], [2, 23,[2, 'RJ', 'Car']]];
const flattedRandomItems = randomItems.flat(2);
console.log(flattedRandomItems);

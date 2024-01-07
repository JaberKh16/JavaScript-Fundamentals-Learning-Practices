/*
    Array Method: array.flat()
    ==========================
    flat() method takes an array and flattend it to its 1D array. Its flat everything inside even
    if have the any level order of array items and then flatted it to 1D array like.

    flat() doesn't take any parameters.

*/

// declaring 'use strict' statement
'use strict';

// declaring the array
const fruits = ['mango', 'apple', 'orange', 'pineapple', 'guava', [1, 2, 4, {user: '2', password: '123'}]];
const flatted_fruits = fruits.flat();
console.log(flatted_fruits);

// const flatted_array = function(fruits){
//     const flatted_array = fruits.flat();
//     return flatted_array;
// }

// console.log(flatted_array());
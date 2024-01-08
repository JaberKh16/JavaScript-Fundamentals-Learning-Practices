/*
    Array Method: array.flatMap()
    =============================
    flatMap() method takes an callbackFunction and flattend it to its 1D array with a logical
    condition applied to changes its content while flattend the array. It is basically a
    combination of map().flat() method.

    flatMap() does take callbackFunc as parameter and as and returns the flatten array.

    Syntax:
        array.flatMap(callbackFunc)

*/

// declaring 'use strict' statement
'use strict';

// declaring the array
const fruits = ['mango', 'apple', 'orange', 'pineapple', 'guava', [1, 2, 4, {user: '2', password: '123'}]];
const flatted_fruits = fruits.flatMap((element)=> {
    return element + (element +1);
});
console.log(flatted_fruits);

// combination of map and flat
const flatted_fruits2 = fruits.map((element)=> {
    return element + (element +1);
}).flat();
console.log(flatted_fruits2);
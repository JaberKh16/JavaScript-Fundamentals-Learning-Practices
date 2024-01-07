/*
    Array Method: array.reverse()
    =============================
    array.reverse() method is used to reverse the elements position 
    in the array. 

    reverse() method does the reversing on positional(index) order 
    like - 1st index value goes to last index and last index comes
    at 1st index.

    reverse() doesn't take any parameters and perform the reverse
    operation.

    reverse() method does modifies the original array so mutable method.s
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
const playingItems = ['sports-car', 'dodge-ball', 'football', 'bat', 'table-tenis'];
playingItems.reverse(); // reversing the order of elements
console.log(`Reversed Array Items: ${playingItems}`);

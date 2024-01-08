/*
    Array With Built-In Function: array.entries()
    ==============================================
    array.entries() method is used to get the entries of the array. It returns
    a new array iterator object- Array Iterator Object.

    toString() method doesn't take any parameters. And its not mutable method
    means doesn't change or mutate the original array instead returns a new array
    object.

    Note: Remember an iterator contains the key/value pairs for an object thus array
    is an object type so it has index/value pairs so iterator will hold that. Via looping
    through the iterator it returns those pairs.
*/

// Declaring 'use strict' statement
'use strict';

let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// Getting the entries of the array
let arrayIterator = numbersList.entries(); // Returns an iterator
console.log(arrayIterator);

// looping over to get the entries
for(const items of arrayIterator){
    console.log(`[index, value]: ${items}`);
}


// with spread operator
const entries = [... numbersList]; // returns a key/value pairs like array normal entries



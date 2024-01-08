/*
    Array With Built-In Function: array.keys()
    ==========================================
    array.keys() method is used to returns the keys of an array. Its basically
    returns the iterator object- Array Iterator Object,which contains 
    the keys e.g- index information.

    keys() method doesn't take any parameters. And its not mutable method
    means doesn't change or mutate the original array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// getting the copy of array itself
let arrayKeys = numbersList.keys(); // retunrns the Array Iterator Object
console.log(arrayKeys);

for(const keys of arrayKeys){
    console.log(`Keys array: ${keys}`);
}

/*
    Array With Built-In Function: array.values()
    ============================================
    array.values() method is used to returns the values of an array. Its basically
    returns the iterator object- Array Iterator Object,which contains 
    the values e.g- values information.

    values() method doesn't take any parameters. And its not mutable method
    means doesn't change or mutate the original array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// getting the values of array
let arrayValues = numbersList.values(); // retunrns the Array Iterator Object
console.log(arrayValues);

for(const values of arrayValues){
    console.log(`Values array: ${values}`);
}

/*
    Array With Built-In Function: array.valueOff()
    ==============================================
    array.valueOff() method is used to returns the array itself, means it makes
    copied of that array via replacing the original array.Basically it returns
    the primitive value of the specified object.

    toString() method doesn't take any parameters. And its a mutable method
    means doesn't change or mutate the original array.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let numbersList = [1, 23, 12, 5, 77, 42, 65, 6];
console.log(numbersList);

// getting the copy of array itself
let arraySelf = numbersList.valueOff(); // retunrns the array itself
console.log(arraySelf);

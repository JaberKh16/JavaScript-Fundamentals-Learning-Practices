/*
    Array Method: array.indexOf(element)
    ====================================
    array.indexOf(element) method is used to find out the index of the 
    specified 'element' passed as argument from an array. If found returns
    the index value, otherwise returns -1.
    

    indexOf(element) generally look for the specified 'element' 
    first occurence in the array searching started from index 0.

    indexOf(element) takes a single parameter 'element' which
    denotes the value/element which index value needs to be found out.

    indexOf(element) doesn't change the original array so non mutable method.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let moviesName = ['Spider-Man','Infinity-War', 'Avengers', 'Black-Widow'];
let indexPosition = moviesName.indexOf('Avengers');
console.log(`Element \'Avengers\' Index Value: ${indexPosition}`);

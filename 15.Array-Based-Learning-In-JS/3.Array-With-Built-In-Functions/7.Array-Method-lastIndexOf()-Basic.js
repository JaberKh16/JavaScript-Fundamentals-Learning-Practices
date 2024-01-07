/*
    Array Method: array.lastIndexOf(element)
    =========================================
    array.lastIndexOf(element) method is used to find out the index of 
    the specified 'element' passed as argument from an array. If found 
    returns the index value, otherwise returns -1.
    

    lastIndexOf(element) generally look for the specified 'element' 
    last occurence in the array searching started from index 0.

    lastIndexOf(element) takes a single parameter 'element' which
    denotes the value/element which index value needs to be found out.

    lastIndexOf(element) doesn't change the original array so non mutable method.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let moviesName = ['Spider-Man','Infinity-War', 'Avengers', 'Black-Widow', 'Avengers'];
let indexPosition = moviesName.lastIndexOf('Avengers');
console.log(`Element \'Avengers\' Index Value: ${indexPosition}`);

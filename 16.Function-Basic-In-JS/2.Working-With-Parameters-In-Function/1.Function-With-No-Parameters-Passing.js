/*
    Function Without Having Parameters 
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function sortingTheElements(){
    // declaring an array
    const numbersList = [1, 21, 25, 4, 40, 78, 3, 0, 34, 65, 50];
    // writing a comparator function to change the sorting order to descending order
    numbersList.sort(function sortingDescendingOrder(n1, n2){
        return (n2 - n1);
    })
    console.log(`${numbersList}`);
}

// Calling The Function
sortingTheElements();
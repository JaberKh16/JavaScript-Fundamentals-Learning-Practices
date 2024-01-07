/*
    Array Method: array.some(callbackFunction)
    ==========================================
    array.some(callbackFunction) takes the "callbackFunction" which iterates
    like- forEach() helper method which then iterating over individual items
    through "callbackFunction" over some condition and returns a boolean
    value.If some of the items matches the specified case then 'true', 
    otherwise returns 'false'.
    
    Syntax-    
            array.some(function(obj){
                return obj.property === value;
            })

    It's working mechanism is like joining those iteration of every cases
    with logical OR(||) operation thus if any of the iteration case is
    true then it resulted as true.
    
*/

// declaring 'use strict' statement
'use strict';

// declaring an arrya
const personsInformation = [
    {'name': 'Jaber', 'age': 20, gender:'male'},
    {'name': 'Karshov', 'age': 23, gender:'male'},
    {'name': 'Jenny', 'age': 34, gender:'female'},
    {'name': 'Rishi', 'age': 43, gender:'male'},
    {'name': 'Ross', 'age': 28, gender:'male'},
];

console.log(personsInformation);

let iterationCount = 0; // to store the iteration count

// using every() method to get the information of the specified case if every case matches
const checkIfSomePersonIsMale = personsInformation.some((personsInformation)=> {
    console.log(++iterationCount + '-->' + (personsInformation.age >= 28));
    return personsInformation.age >= 28 
});

console.log(checkIfSomePersonIsMale); 

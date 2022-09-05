/*
    Array Method: array.every(callbackFunction)
    ==========================================
    array.every(callbackFunction) takes the "callbackFunction" which iterates
    like forEach() helper method which then iterating over individual items
    through "callbackFunction" over some condition and returns a boolean
    value 'true' if every items matches the specified case, 
    otherwise returns 'false'.
    
    Syntax-    
            array.every(function(obj){
                return obj.property === value;
            })

    It's working mechanism is like joining those iteration of every cases
    with logical AND(&&) operation thus if any of the iteration case is
    false then it resulted as false.
*/

// declaring 'use strict' statement
'use strict';

// declaring an arrya
const personsInformation = [
    {'name': 'Jaber', 'age': 28, gender:'male'},
    {'name': 'Karshov', 'age': 38, gender:'male'},
    {'name': 'Jenny', 'age': 24, gender:'female'},
    {'name': 'Rishi', 'age': 43, gender:'male'},
    {'name': 'Ross', 'age': 28, gender:'male'},
];

console.log(personsInformation);

let iterationCount = 0; // to store the iteration count
// using every() method to get the information of the specified case if every case matches
const checkEveryPersonIsMale = personsInformation.every((personsInformation)=>{
    console.log(++iterationCount + '-->' + (personsInformation.age >= 28));
    return personsInformation.age >= 28 
});
console.log(checkEveryPersonIsMale); 

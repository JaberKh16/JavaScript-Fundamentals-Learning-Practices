/*
    Array Method: array.find(callbackFunction)
    ==========================================
    array.find(callbackFunction) takes the "callbackFunction" which iterates
    like- filter() helper method which then iterating over individual items
    through "callbackFunction" over some condition and just the difference is
    that it only iterates for the first match of the condition and leaving
    the rest match cases. 

    find() iterates over the items as like an iterator and only returns the
    first match case even if have duplicate matches.
    
    Syntax-    
            array.find(function(obj){
                return obj.property === value;
            })
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

// using find() method to get the information of the specified information
const findInfo = personsInformation.find((personsInformation)=> personsInformation.age === 28 );
console.log(findInfo); // note: find() only gets the first information even if have duplicates

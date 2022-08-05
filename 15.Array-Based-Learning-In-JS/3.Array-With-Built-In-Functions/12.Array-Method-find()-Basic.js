/*
    Array Method: array.find(callbackfunction)
    ==========================================
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

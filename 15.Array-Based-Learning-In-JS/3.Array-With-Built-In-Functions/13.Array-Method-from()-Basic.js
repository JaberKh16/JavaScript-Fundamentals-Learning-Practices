/*
    Array Method: array.from()
    ==========================
    The Array.from() static method creates a new, shallow-copied Array instance 
    from an array-like or iterable object.

    Array.from() is a non mutable method and its under the Array() class.
    
    Syntax-
        Array.from(arrayLike, mapFn, thisArg)
    
    where, lets demonstrate those parameters one by one-
        1) arrayLike - An array-like or iterable object to convert to an array.
        2) mapFn - Map function to call on every element of the array.
        3) thisArg - Value to use as this when executing mapFn.

*/

// declaring 'use strict' statement
'use strict';

// declaring an array
const personsInformation = [
    {'name': 'Jaber', 'age': 28, gender:'male'},
    {'name': 'Karshov', 'age': 38, gender:'male'},
    {'name': 'Jenny', 'age': 24, gender:'female'},
    {'name': 'Rishi', 'age': 43, gender:'male'},
    {'name': 'Ross', 'age': 28, gender:'male'},
];

console.log(personsInformation);

// using from() methdo to create a new copy of array
const newPersonInfo = Array.from([{'name': 'Rachel', 'age': 30, 'gender':'female'}]);
console.log(newPersonInfo); // note: find() only gets the first information even if have duplicates


// merging both the arrays and assign it to new array 
const mergedPersonInfo = personsInformation.concat(newPersonInfo); // merging both arrays with spread operator
console.log(`After merging:`);

console.log('personInformation Array Items: ');
// looping throgh the 'personInformation' array with forEach() method the array remain unchange
personsInformation.forEach((person)=>{
    console.log(person);
}); 

console.log('newPersonInfo Array Items: ');
// looping throgh the 'newPersonInfo' array with forEach() method the array remain unchange
newPersonInfo.forEach((person)=>{
    console.log(person);
}); 


console.log('mergedPersonInfo Array Items: ');
// looping throgh the 'mergePersonInfo' array with forEach() method 
mergedPersonInfo.forEach((person)=>{
    console.log(person);
});

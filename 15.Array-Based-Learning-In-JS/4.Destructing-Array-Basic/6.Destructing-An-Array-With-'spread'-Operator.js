/*
    Destructing An Array With 'spread' Operator
    ===========================================
    Destruction with 'spread' Operator can be possible in JS.
    To destruct an array 'spread' Operator need to use three(...var_name)
    where three dots(...) it denotes the 'spread' Operator. 
    
    For Example:
        
        let someValues = ['apple', 'car', 'letter'];
    
    Though 'spread' Operator holds an array value so assign it to variable,
    let storedArrayVar = [...someValues];
    console.log(storedArrayVar);

*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let fruits = ['apple', 'pine-apple', 'banana', 'guave'];
let clonedFruitsElements = [...fruits]; // cloning the array with ...spread Operator
console.log(`Array Containing Elements: ${fruits}`);
console.log(`Cloned Array Element With \'spread\' Operator: ${clonedFruitsElements}`);

// Checking If They Equal
if (fruits == clonedFruitsElements){
    console.log('Equal', typeof fruits + " " + typeof clonedFruitsElements);
}
else{
    console.log('Not Equal', typeof fruits + " " + typeof clonedFruitsElements );
}

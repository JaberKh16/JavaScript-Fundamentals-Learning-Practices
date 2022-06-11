/*
    Working With Loops In JS: For Of Loop
    =====================================
    Syntax:  
        for(let initializer of specifiedDatatype)
        {
            statement1;
            statement2;
            statement3;
            // here, initializer starts counts from 0 to specifiedDatatype.length
            // which is the values for the specifiedDatatype, so
            // access use only the setted 'initializer' name.
        }
*/

// Declaring 'use strict' statement
'use strict';

// creatinga an array
const fruits = ['mango', 'orange', 'banana', 'papaya'];
console.log(`Available items are: `);

// looping over the array using for in loop
for (let items of fruits){    
    console.log(`${items}`);
}

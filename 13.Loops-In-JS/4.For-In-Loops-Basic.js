/*
    Working With Loops In JS: For In Loop
    =====================================
    Syntax:  
        for(let initializer in specifiedDatatype)
        {
            statement1;
            statement2;
            statement3;
            // here, initializer starts counts from 0 to specifiedDatatype.length
            // which is the index value for the specifiedDatatype, so
            // access use specifiedDatatype[index]
        }
*/

// Declaring 'use strict' statement
'use strict';

// creatinga an array
const fruits = ['mango', 'orange', 'banana', 'papaya'];
console.log(`Available items are: `);

// looping over the array using for in loop
for (let items in fruits){    
    console.log(`${fruits[items]}`);
}

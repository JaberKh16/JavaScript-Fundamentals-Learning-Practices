// declaring the 'use strict' statement
'use strict'

// creatinga an array
const fruits = ['mango', 'orange', 'banana', 'papaya'];
console.log(` Available items are: `);

// looping over the array using for in loop
for (let items in fruits){    
    console.log(`${fruits[items]}`);
    
    if (fruits.indexOf('straberries') === -1){
        // include the new item at the end
        fruits.push('straberries');
    }
}

// looping over the array using for of loop
console.log('After included a new item now fruist list have: ');
for (let newItems of fruits){
    console.log(`${newItems}`);
}
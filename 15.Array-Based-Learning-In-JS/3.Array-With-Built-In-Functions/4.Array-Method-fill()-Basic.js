/*
    Array Method: array.fill() 
    ==========================
    array.fill() method is used to fills an array with an static value.
    It can change all the elements to a static value or change a few 
    selected items.
    
    Syntax:
        i)  fill(values)
        ii) fill(values, start_index, stop_index)

    fill() generally takes atleast a single parameter 'value' which can be any variable type
    like- a single value, an object, an array.
    
    fill() doesn't change the original array so non mutable method

*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
let colors = ['red', 'blue', 'black', 'green'];
colors.fill(['purple', 'violet']); // fill the whole arrays with an array ['purple', 'violate']
console.log(colors);

// Changing The Last Elements where changing will be started from index 3 and replaced with the 'values' 
let colorsList = ['red', 'blue', 'black', 'green'];
colorsList.fill('green-violate', 3, 4); // ['red', 'blue', 'black', 'green-violate', 'green-violate']
console.log(colorsList);
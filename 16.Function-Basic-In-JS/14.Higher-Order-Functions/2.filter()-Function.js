/*
    Higher Order Functions- array.filter()
    ======================================
    array.filter() function is used to filters out some values(elements)
    from the array with specified logic(condition matches).

    Syntax- 
        a.  array.filter(function (){

            });

        b. function(value, index, array){}; // value returns valus, index for index and array is is for the array
        c. array.filter(function(currentValue, index, arr), thisArg)
*/

// defining the 'use strict' statement
'use strict';



// Example-1
// defining an array
const numbers = [100, 20, 42, 53, 674, 75, 31, 89];
const evenNumbers = numbers.filter((number)=>{
    if(number % 2 === 0){
        return number;
    }
    return;
});

console.log(evenNumbers);


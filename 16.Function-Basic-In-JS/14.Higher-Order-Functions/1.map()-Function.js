/*
    Higher Order Functions- array.map()
    ===================================
    array.map() function is used to transform the given array
    with specified logic(match cases) and returns a tramsform
    version of new array for that given array.

    It reserves the immutability of the array means it doesn't
    change the actual array instead it creates a new array
    with match cases.

    Syntax- 
        a.  array.map(function (arr){
                return  arr * 3
            });

        b.  array.map(function(currentValue, index, arr), thisArg)

*/

// defining the 'use strict' statement
'use strict';



// Example-1
// defining an array
const numbers = [100, 20, 2, 3, 6, 5, 31, 9];
const evenNumbers = numbers.map((number)=>{
    if(number % 2 === 0){
        return number * 2;
    }
    return "";
});

console.log(evenNumbers);


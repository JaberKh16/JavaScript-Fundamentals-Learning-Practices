/*
    Question-11. Counting the occurrences of an item in an array.

    Hint- use arr.reduce((accumulator, current), initialValue)
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 1, 43, 78, 34, 1, 9];

// defining the function
const countOccurences = (arr, targetedValue)=>arr.reduce(function(totalCount, iterateItem){
    if(iterateItem === targetedValue){
        return totalCount++;
    }
    else{
        return totalCount;
    }
}, 0)
console.log(countOccurences(itemsArray, 1));



// another way for charcters
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
const countValue = {};

for (const element of arr) { // for of loop gets the items as keyword
    if (countValue[element]) { // if(countValue['a']) exists
        countValue[element] += 1; // countValue['a']++ 
    } 
    else {
        count[element] = 1;
    }
}

console.log(countValue); // 👉️ {a: 3, b: 1, c: 2}
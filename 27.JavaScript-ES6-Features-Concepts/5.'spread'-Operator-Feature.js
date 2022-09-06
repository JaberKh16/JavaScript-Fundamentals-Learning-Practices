/*
    JavaScript ES5 Features- 'spread' Operator
    =========================================
    ES6 Feature 'spread' Operator makes JS Developer life in terms
    of working with more code while performing concatenation of 
    multplie arrays.
    For Example-

        const arr1 = [1, 2, 5, 6];
        const arr2 = [10, 20, 40, 32]
        const arr3 = arr1.concate(arr2)
        const arr4 = arr3.concate([100, 200, 300])


    ES6 'spread' Operator can be defined through the following-
        const arr1 = [1, 2, 5, 6];
        const arr2 = [10, 20, 40, 32];
        const arr3 = [...arr1, ...arr2];
    
    Above, that ... (three dot) is the 'spread' Operator

*/

// Example-1 ES5 way of working
var arr1 = [1, 4, 6, 7, 8];
var arr2 = [10, 25, 79, 91];
var arr3 = arr1.concat(arr2);
var arr4 = arr3.concat([100, 200, 300]);

console.log("Array3: ", arr3);
console.log("Array4: ", arr4);


// Example-2 ES6 way of working
const arr11 = [1, 4, 6, 7, 8];
const arr22 = [10, 25, 79, 91]; 
const arr33 = [...arr11, ...arr22];
console.log("Array33: ", arr33);
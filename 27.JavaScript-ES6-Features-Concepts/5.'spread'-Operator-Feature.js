/*
    JavaScript ES5 Features- 'spread' Operator
    =========================================
    ES6 Feature 'spread' Operator makes JS Developer life in terms
    of working with more code while performing concatenation of 
    multplie arrays.
    For Example-

        const arr1 = [1, 2, 5, 6];
        const arr2 = [10, 20, 40, 32]
        const arr3 = [];
        arr3.concat(arr1);
        arr3.concat(arr2);

    ES6 'spread' Operator can be defined through the following-
        const arr1 = [1, 2, 5, 6];
        const arr2 = [10, 20, 40, 32];
        const arr3 = [...arr1, ...arr2];
    
    Above, that ... (three dot) is the 'spread' Operator

*/

// Example-1 ES5 way of working
var arr1 = [1, 4, 6, 7, 8];
var arr2 = [10, 25, 79, 91];
var arr3 = [];

arr1.concat(arr2);
arr3 = arr1;
console.log(arr3);

arr3.concat(arr2)
console.log(arr3);
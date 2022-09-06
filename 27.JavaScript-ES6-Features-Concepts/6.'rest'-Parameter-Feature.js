/*
    JavaScript ES6 Features- 'rest' Parameter
    =========================================
    JavaScript ES6 Feature 'rest' parameter controls the rest of
    the parameters passed to function when function invokation
    as an arguments.
    For Example-
        function numbers(n1, n2, ...restNumbers){
            console.log(restNumbers); // having rest passed numbers as an array
        }

*/

// Example-1 ES6 'rest' Parameter
function summationOfNumbers(n1, n2, ...restNumbers){
    console.log(n1, n2);
    console.log(restNumbers); // returns the array of rest passed numbers
    for(let num in restNumbers){
        return n1 + n2 + num;
    }
}

const summationResult = summationOfNumbers(10, 20, 30, 40, 50, 60, 70);
console.log(summationResult);
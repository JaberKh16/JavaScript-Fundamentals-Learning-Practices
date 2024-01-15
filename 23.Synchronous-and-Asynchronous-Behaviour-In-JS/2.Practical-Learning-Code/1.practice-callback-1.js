/*
    Practices On Callback Funtions
*/

// Example-1
const summation = (num1, num2) =>{
    return num1 + num2;
}

const performSummationAsyncWay = function (callback, num1, num2){
    console.log('Operation started.......');
    setTimeout(()=>{
        const result = callback(num1, num2);
        console.log(result);
    }, 2000);
}

// passing callback, two values
performSummationAsyncWay(summation, 1, 6);


// Example-2
const summation2 = (num1, num2) =>{
    return num1 + num2;
}

const performSummationAsyncWay2 = function (callback){
    console.log('Operation started.......');
    setTimeout(()=>{
        const result = callback();
        console.log(result);
    }, 2000);
}

// passing callbacks 
performSummationAsyncWay2(() => summation2(1, 5));



// Example-3
// using rest parameter example
const summationOfNumbers = (num1, num2, ...numbersOfArray) =>{
    const sumOfNonRestParams = num1 + num2;
    const totalResult = numbersOfArray.reduce((accumulator, current) =>  accumulator + current, sumOfNonRestParams);
    return totalResult;    
}

// using arguments example
const summationUsingArgs = () => {
    const argsNumberArray = Array.from(arguments); // though arguments is an array type object making an Array Object
    const totalResult = 0;
    totalResult = argsNumberArray.reduce((accumulator, current) => accumulator + current);
    return totalResult;
}

const performSummationOnRestAsyncWay = function (callback, num1, num2, ...restNumbers){
    console.log('Operation started.......');
    setTimeout(()=>{
        const result = callback(num1, num2, ...restNumbers);
        console.log(result);
    }, 2000);
}

// passing callbacks, two values, rest oaramters
performSummationOnRestAsyncWay(summationOfNumbers, 1, 6, 2, 55, 6, 9);


// // Example-4
// // using arrow() function example
// const performSummationOnRestAsyncWayArrow = (callback, num1, num2, ...rest) => {
//     console.log('Operation started.......');
//     setTimeout(() => {
//         const result = callback(num1, num2, ...rest);
//         console.log(result);
//     }, 2000);
// }

// // passing arrow function as callback
// performSummationOnRestAsyncWayArrow((num1, num2, ...rest) => {
//     const totalResult = [num1, num2, ...rest].reduce((acc, num) => acc + num, 0);
//     console.log(totalResult);
// }, 1, 6, 2, 55, 6, 9);




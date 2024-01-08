/*
    Array Method: array.toLocaleString()
    ====================================
    array.toLocaleString() method basically used with objects like- dates and numbers.


    toLocaleString() doesn't take any parameters. Its not a mutable method means it 
    doesn't changes the original array.


    Syntax:
        array.toLocaleString()


*/

// declaring an array of numbers
const numbers = [1000, 2000, 3000, 4000];

// Using toLocaleString() to format numbers with commas based on user's locale
const formattedNumbers = numbers.map(number => number.toLocaleString());

console.log(formattedNumbers); // return  ["1,000", "2,000", "3,000", "4,000"]

// Example 3: Sum of Digits of a Number
function sumOfDigitsOfANumber(number) {
    if(number === 0) {
        return 0;
    }
    return number % 10 + sumOfDigitsOfANumber(Math.floor(number / 10));
}

console.log(sumOfDigitsOfANumber(123));
console.log(sumOfDigitsOfANumber(456));
console.log(sumOfDigitsOfANumber(789));

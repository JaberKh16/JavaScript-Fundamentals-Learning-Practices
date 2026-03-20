// Example 2: Factorial of a number
function factorialOfANumber(number) {
    if(number === 0) {
        return 1;
    }
    console.log(`number => ${number} factorialOfANumber(${number - 1})`);    
    return number * factorialOfANumber(number - 1);
}
    
console.log(factorialOfANumber(5));
console.log(factorialOfANumber(0));
console.log(factorialOfANumber(1));
console.log(factorialOfANumber(10));

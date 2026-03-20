// Example-7: Fibonacci Sequence 
/*
    Explain the fibonacci sequence and its logic to implement
    - The fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers
    - For example, the fibonacci sequence starts with 0 and 1, and the next numbers are 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
    - The logic is to recursively call the function with the previous two numbers and add them together

    pseudocode:
    - if n is 0 or 1, return n
    - recursively call function with n-1 and n-2 and add them together

*/
function fibonacci(n) {
    if(n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

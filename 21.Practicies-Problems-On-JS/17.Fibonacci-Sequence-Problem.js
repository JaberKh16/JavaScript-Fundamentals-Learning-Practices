/*
    Problem Statement: Generate the first n numbers in the Fibonacci sequence.

    Example:
    Input: 6
    Output: [0, 1, 1, 2, 3, 5]

    Explanation: The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
*/

function generateFibonacci(n) {
    const fibSequence = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSequence.push(0);
        } else if (i === 1) {
            fibSequence.push(1);
        } else {
            const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
        }
    }

    return fibSequence;
}

// Example usage:
const n = 6;
const fibonacciNumbers = generateFibonacci(n);
console.log(`The first ${n} numbers in the Fibonacci sequence are:`, fibonacciNumbers); // Output: The first 6 numbers in the Fibonacci sequence are: [0, 1, 1, 2, 3, 5]
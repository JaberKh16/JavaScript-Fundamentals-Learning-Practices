/*
    Problem: Find the missing number in an array of size n-1 containing numbers from 1 to n.

    Example:
    Input: [1, 2, 4, 6, 3, 7, 8]
    Output: 5

    Explanation: This function calculates the expected sum of consecutive integers up to
    the length of the array and subtracts the actual sum of the array elements to find
    the missing number.
*/

function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of the elements in the array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 4, 6, 3, 7, 8];
const n = 8; // Since numbers are from 1 to 8
const missingNumber = findMissingNumber(arr, n);
console.log(`The missing number is: ${missingNumber}`); // Output: The missing number is: 5
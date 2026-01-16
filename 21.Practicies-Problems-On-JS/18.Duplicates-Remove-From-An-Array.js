/*
    Problem Statement: Write a JavaScript function that removes duplicate values from an array.

    Example:
    Input: [1, 2, 2, 3, 4, 4, 5]
    Output: [1, 2, 3, 4, 5]

    Explanation: This function uses a Set to store unique values from the input array,
    effectively removing any duplicates, and then converts the Set back to an array.
*/

function removeDuplicates(arr) {
    // Create a Set from the array to automatically remove duplicates
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const resultArray = removeDuplicates(inputArray);
console.log('Array after removing duplicates:', resultArray); // Output: Array after removing duplicates: [1, 2, 3, 4, 5]
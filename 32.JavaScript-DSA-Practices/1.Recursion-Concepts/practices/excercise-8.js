// Example-8: Flatten Nested Array
/*
    Explain the flatten nested array and its logic to implement
    - The flatten nested array is a function that takes a nested array and returns a flattened array
    - For example, [[1, 2], [3, 4], [5, 6]] is a nested array and [1, 2, 3, 4, 5, 6] is a flattened array
    - The logic is to recursively call the function with the nested array and flatten it

    pseudocode:
    - if array is empty, return empty array
    - if first element is an array, recursively call function with first element and rest of array
    - else, recursively call function with rest of array

*/
function flattenArray(arr) {
    if(arr.length === 0) {
        return [];
    }
    if(Array.isArray(arr[0])) {
        return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
    }
    return [arr[0]].concat(flattenArray(arr.slice(1)));
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7, 8]]));
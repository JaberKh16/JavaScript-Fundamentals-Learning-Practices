
// Procedure-1: Sort by positive or negative value
function sortPositiveNegative(arr) {
    // Your code here
    return arr.sort((a, b) => a - b); // ascending order
    return arr.sort((a, b) => b - a); // descending order
}

console.log(sortPositiveNegative([3, -1, 4, -5, 2]));


// Procedure-2: Sort by absolute value
function sortAbsoluteValue(arr) {
    // Your code here
    return arr.sort((a, b) => Math.abs(a) - Math.abs(b)); // ascending order
    return arr.sort((a, b) => Math.abs(b) - Math.abs(a)); // descending order
}

console.log(sortAbsoluteValue([3, -1, 4, -5, 2]));


// Procedure-3: Sort by string length
function sortStringByLength(arr) {
    // Your code here
    return arr.sort((a, b) => a.length - b.length); // ascending order
    return arr.sort((a, b) => b.length - a.length); // descending order
}

console.log(sortStringByLength(["apple", "pie", "cherry", "banana"]));

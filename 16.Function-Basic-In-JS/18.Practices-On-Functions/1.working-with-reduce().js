// Example-1:
const nums = [1, 2, 4, 5, 7, 8, 10, 23];
let totalOfNumbers = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(totalOfNumbers)
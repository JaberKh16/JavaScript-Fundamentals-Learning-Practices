// Example-4: Product Of Array 

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 5]));
console.log(productOfArray([2, 3, 4, 5]));
console.log(productOfArray([6, 7, 8, 9]));


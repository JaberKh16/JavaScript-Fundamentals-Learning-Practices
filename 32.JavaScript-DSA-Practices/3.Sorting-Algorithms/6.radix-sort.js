function getDigits(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }  
    return maxDigits;
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++){
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigits(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

console.log(getDigits(12345, 0)); // 5
console.log(getDigits(12345, 1)); // 4
console.log(getDigits(12345, 2)); // 3
console.log(getDigits(12345, 3)); // 2
console.log(getDigits(12345, 4)); // 1
console.log(getDigits(12345, 5)); // 0

console.log(digitCount(1)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
console.log(digitCount(0)); // 1

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2
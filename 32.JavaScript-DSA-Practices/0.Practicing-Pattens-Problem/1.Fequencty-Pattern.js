
/*
    Frequency Pattern Problem
    =========================

    Analogy: 
    a = [1, 2, 3, 5] 
    b = [1, 4, 9, 25] // this array is result of a ** 2

*/

// time taken - O(n ^ 2)
function frequency_prob(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0; i<arr1.length; i++){ //  O(n)
        const correctIndex = arr2.indexOf(arr1[i] ** 2);  // O(n)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

const arr1 = [1, 2, 4, 5]
const arr2 = [1, 4, 16, 25];

const val = frequency_prob(arr1, arr2);
console.log(val);


// setup frequency pattern    -  O(n) + O(n) + O(n) = O(n)
function frequency_pattern(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    // setup two initial pattern
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){ // O(n)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){ // O(n)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    for(let key in frequencyCounter1){ // O(n)
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

frequency_pattern([1,2,3,2,5], [9,1,4,4,11])
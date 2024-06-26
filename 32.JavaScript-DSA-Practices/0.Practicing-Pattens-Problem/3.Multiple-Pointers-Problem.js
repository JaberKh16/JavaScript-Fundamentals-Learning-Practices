// Analogy - Goes single direction 
// time taken - O(n ^ 2)
function sumToZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [ arr[i], arr[j] ];
            }
            console.log(arr[i], arr[j] );
        }
    }
}

sumToZero([-4, -3, -2, -1, 0, 1, 2, 5]);


// Analogy - Going In Both Ways
// time taken - O(n)
function sumToZeroRefactor(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){ // fail safe 
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [ arr[left], arr[right] ];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

sumToZero([-4, -3, -2, -1, 0, 1, 2, 5]);
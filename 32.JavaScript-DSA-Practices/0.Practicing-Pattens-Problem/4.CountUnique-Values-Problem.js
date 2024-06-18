// Analogy - Going In Both Ways Using Multiple Pointers
// time taken - O(n)
function countUniqueValues(arr){
    if(arr.length ===  0){
        return 0;
    }
    
    let left = 0;
    
    for(right = left + 1; right <arr.length; right++){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
        }
        console.log(left, right);
    }
    return left + 1;
   
}

countUniqueValues([1, 1, 1, 2, 1, 1, 1, 3]);
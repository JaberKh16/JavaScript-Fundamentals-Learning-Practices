/*

    Sliding Window Concepts
    =======================
    This pattern involves creating a window which can either be an array or number from one position to another.
    Depending on a certain condition the window either increases or closes(and a new window is created).

    Very useful for keeping track of a subset of data in an array/string etc.

*/

// Example Of Maximum Subarray
function maxSubArraySum(arr, num){
    if( num > arr.length ){
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j=0; j < num ; j++){
            temp += arr[i+ j];
        }
        if(temp > max){
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}


maxSubArraySum([1, 3, 5, 6, 7, 1, 2, 5, 4, 6, 6, 7 ], 4)
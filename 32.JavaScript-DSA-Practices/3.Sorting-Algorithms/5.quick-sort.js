function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
function pivot(arr, start=0, end = arr.length-1){
    var pivot = arr[start]; // choosing the first element as the pivot
    var swapIndex = start; // to keep track of the position where the pivot should be placed after partitioning
    console.log(`Base Array: ${arr}`);
    for (let i = start + 1; i <= end; i++){
        if( pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
            console.log(`Pivot: ${pivot}, Swap Index: ${swapIndex}, Current Index: ${i}, no_of_things_greater: ${swapIndex - start}, Array: ${arr}`);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

// print
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// function quickSort(arr, left = 0, right = arr.length - 1){
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right);
//         // left
//         quickSort(arr, left, pivotIndex - 1);
//         // right
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
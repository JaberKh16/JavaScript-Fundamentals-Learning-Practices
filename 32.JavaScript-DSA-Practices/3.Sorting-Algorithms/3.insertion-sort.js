function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > key; j--){
            arr[j + 1] = arr[j];
            console.log(arr, arr[j], key);
            // arr[j] = key;
        }
        
        return arr;
    }
}

console.log(insertionSort([12, 11, 13, 5, 6]));

// Procedure-2: ESM Setup
// function insertionSortESMSetup(arr){
//     const swap = (arr, i, j) => {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     };

//     for(let i = 1; i < arr.length; i++){
//         let key = arr[i];
//         for(let j = i - 1; j >= 0 && arr[j] > key; j--){
//             swap(arr, j, j + 1);
//             arr[j] = key;
//         }
//     }
//     return arr;
// }

// console.log(insertionSortESMSetup([12, 11, 13, 5, 6]));

// Procedure-3: Other Way
// function insertionSortOtherWay(arr){
//     const swap = (arr, i, j) => {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     };

//     for(let i = 1; i < arr.length; i++){
//         let key = arr[i];
//         let j = i - 1;
//         while(j >= 0 && arr[j] > key){
//             swap(arr, j, j + 1);
//             j--;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// console.log(insertionSortOtherWay([12, 11, 13, 5, 6]));

// Procedure-4: Optimized Insertion Sort
// function insertionSortOptimized(arr){
//     const swap = (arr, i, j) => {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     };

//     for(let i = 1; i < arr.length; i++){
//         let key = arr[i];
//         let j = i - 1;
//         let noSwaps = true;
//         while(j >= 0 && arr[j] > key){
//             swap(arr, j, j + 1);
//             j--;
//             noSwaps = false;
//         }
//         if(noSwaps) break;
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// console.log(insertionSortOptimized([12, 11, 13, 5, 6]));
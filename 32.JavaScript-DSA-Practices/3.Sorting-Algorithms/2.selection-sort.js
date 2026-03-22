/**
 * SELECTION SORT ALGORITHM
 * 
 * Overview:
 * Selection Sort divides the array into sorted and unsorted regions,
 * repeatedly selects the smallest element from the unsorted region 
 * and moves it to the end of the sorted region.
 * 
 * Time Complexity:
 * - Best Case: O(n²)
 * - Average Case: O(n²) 
 * - Worst Case: O(n²)
 * 
 * Space Complexity: O(1) - In-place sorting
 * 
 * Algorithm Steps:
 * 1. Find the minimum element in unsorted array
 * 2. Swap it with the first unsorted element
 * 3. Move boundary of sorted region by one
 * 4. Repeat until array is sorted
 * 
 * Use Cases:
 * ✅ Small datasets
 * ✅ Memory-constrained environments
 * ✅ When minimizing swaps is important
 * 
 * Disadvantages:
 * ❌ Always O(n²) regardless of input order
 * ❌ Not stable (doesn't preserve element order)
 * ❌ Poor performance on large datasets
 */

// Basic Selection Sort Implementation
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i; // set the minimum index 
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[minIndex]){
                minIndex = j;
            }
        }
        // perfrom the swap of index value
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// ES6 Modern Implementation
function selectionSortES6(arr) {
    const findMinIndex = (arr, start) => {
        let minIndex = start;
        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        return minIndex;
    };
    
    for (let i = 0; i < arr.length - 1; i++) {
        const minIndex = findMinIndex(arr, i);
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Test the implementations
console.log("Selection Sort:", selectionSort([64, 34, 25, -12, 22, -11, 90]));
// console.log("ES6 Selection Sort:", selectionSortES6([64, 34, 25, -12, 22, -11, 90]));


/**
 * BUBBLE SORT ALGORITHM DOCUMENTATION
 * 
 * Overview:
 * Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through 
 * the list, compares adjacent elements, and swaps them if they are in the wrong order. 
 * The algorithm gets its name because smaller or larger elements "bubble" to their correct 
 * position in the array.
 * 
 * Time Complexity:
 * - Best Case: O(n) - When array is already sorted (with optimization)
 * - Average Case: O(n²) - Random order of elements
 * - Worst Case: O(n²) - When array is sorted in reverse order
 * 
 * Space Complexity: O(1) - In-place sorting algorithm
 * 
 * Use Cases:
 * ✅ Educational purposes and teaching sorting concepts
 * ✅ Small datasets (< 100 elements)
 * ✅ Nearly sorted data (with optimization)
 * ✅ Memory-constrained environments
 * 
 * When to Avoid:
 * ❌ Large datasets (poor performance)
 * ❌ Performance-critical applications
 * ❌ Production environments (better alternatives exist)
 * 
 * Advantages:
 * + Simple to implement and understand
 * + In-place sorting (O(1) space complexity)
 * + Stable sort (maintains relative order of equal elements)
 * + Can detect if array is already sorted (with optimization)
 * 
 * Disadvantages:
 * - Inefficient for large datasets (O(n²) time complexity)
 * - Poor performance compared to other algorithms
 * - Too many comparisons and swaps
 * 
 * Optimization Techniques:
 * 1. Early termination when no swaps occur
 * 2. Reduced inner loop range (arr.length - i - 1)
 * 3. Cocktail shaker sort (bidirectional passes)
 */

// Procedure-1: Generalized Bubble Sort
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                // swap
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
            console.log(`[${arr}], ${arr[j]}, ${arr[j+1]}`);
        }
        console.log(`One Pass Complete = Compared Items: ${arr[j]} ${arr[j+1]}`);
    }
   
    return arr;
}

console.log(bubbleSort([64, 34, 25, -12, 22, -11, 90]));

// Procedure-2
function bubbleSortESMSetup(arr){
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }  
    return arr;
} 

console.log(bubbleSortESMSetup([64, 34, 25, -12, 22, -11, 90]));


// Procedure-3: 
function bubbleSortOtherWay(arr){
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

// Procedure-4: Optimized Bubble Sort
function bubbleSortOptimized(arr){
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    
    for(let i = 0; i < arr.length; i++){
        let noSwaps = true;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }  
    return arr;
} 

console.log(bubbleSortOptimized([64, 34, 25, -12, 22, -11, 90]));

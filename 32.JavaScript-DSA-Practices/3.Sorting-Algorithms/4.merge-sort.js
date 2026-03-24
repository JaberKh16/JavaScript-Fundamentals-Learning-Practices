/**
 * Merge Sort Algorithm Implementation
 * 
 * @fileoverview
 * This file implements the Merge Sort algorithm, one of the most efficient
 * and stable sorting algorithms. Merge Sort uses a divide-and-conquer approach
 * to sort arrays with O(n log n) time complexity in all cases.
 * 
 * @description
 * Merge Sort works by:
 * 1. Dividing the array into smaller subarrays (divide phase)
 * 2. Recursively sorting each subarray
 * 3. Merging the sorted subarrays back together in sorted order (conquer phase)
 * 
 * Key characteristics:
 * - Time Complexity: O(n log n) - best, average, and worst case
 * - Space Complexity: O(n) - requires additional space for merging
 * - Stable Sort: Yes - maintains relative order of equal elements
 * - In-place: No - requires extra memory
 * 
 * The algorithm is particularly useful for:
 * - Large datasets where consistent O(n log n) performance is needed
 * - External sorting (sorting data that doesn't fit in memory)
 * - Scenarios where stability is required
 * 
 * @author Your Name
 * @version 1.0.0
 */

/**
 * Merges two sorted arrays into a single sorted array
 * 
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number[]} A new array containing all elements from arr1 and arr2 in sorted order
 * 
 * @example
 * const merged = merge([1, 3, 5], [2, 4, 6]);
 * console.log(merged); // [1, 2, 3, 4, 5, 6]
 */

/**
 * Recursively sorts an array using the Merge Sort algorithm
 * 
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} A new sorted array in ascending order
 * 
 * @example
 * const sorted = mergeSort([38, 27, 43, 3, 9, 82, 10]);
 * console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]
 */

function merge(arr1, arr2){
    let result = [];
    let i = j = 0;

    while(i < arr1.lenght && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]); 
            i++;
        } else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
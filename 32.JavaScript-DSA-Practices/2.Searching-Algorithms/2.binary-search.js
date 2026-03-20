/*
    Binary Search
    -------------
    - It is an efficient search algorithm that works on sorted arrays
    - It uses divide-and-conquer strategy to find a specific element
    - It repeatedly divides the search interval in half

    Pros and Cons Of Binary Search
    ------------------------------
    Pros:
    - Very efficient for large arrays
    - Time complexity is O(log n)
    - Consistent performance regardless of element position
    - Better than linear search for sorted data
    
    Cons:
    - Requires the array to be sorted
    - Not suitable for unsorted data
    - More complex to implement than linear search
    - Additional overhead if sorting is needed first
    
    Pseudocode:
    The algorithm works as follows:
    1. Start with the entire sorted array
    2. Find the middle element of the array
    3. If the middle element matches the target, return its index
    4. If the target is less than the middle element, search the left half
    5. If the target is greater than the middle element, search the right half
    6. Repeat until the element is found or the search interval is empty

    Syntax:
    function binarySearch(arr, target)
        left = 0
        right = arr.length - 1
        while left <= right
            mid = left + Math.floor((right - left) / 2)
            if arr[mid] equals target
                return mid
            else if arr[mid] < target
                left = mid + 1
            else
                right = mid - 1
        return -1

    
    Variation With Time Complexity:
    - Best Case: O(1) - Element found at the first middle position
    - Average Case: O(log n) - Element found after log n comparisons
    - Worst Case: O(log n) - Element not found or found after full search


    Space Complexity:
    - O(1) - Constant space complexity (iterative version)
    - O(log n) - Recursive version due to call stack

    Auxiliary Space Complexity:
    - O(1) - Constant auxiliary space complexity (iterative)
    - O(log n) - For recursive implementation

    Stability:
    - Binary search is stable for finding elements
    - If there are multiple occurrences, it may return any matching index
    - For first occurrence, additional logic is needed

    Comparison with Other Search Algorithms:
    - Binary search is much faster than linear search for large arrays
    - Binary search requires sorted data, linear search works on any data
    - Binary search is ideal for static or rarely changing datasets
    - For dynamic datasets, consider balanced trees or hash tables

    Use Cases:
    - Binary search is used when the array is large and sorted
    - Dictionary lookups in applications
    - Database indexing systems
    - Game development for efficient lookups
    - File system searches

    Time Complexity Graph:
    - Binary search has a time complexity of O(log n)
    - Linear search has a time complexity of O(n)
    - Binary search outperforms linear search for n > 32 approximately


*/

// Procedure: 1 => Via Iterative Approach
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            console.log(`Element found at index ${mid} and target matched: ${target}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return {
        found: false,
        message: `Element not found in the array`
    }
}

// Procedure: 2 => Via Recursive Approach
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Procedure: 3 => Find First Occurrence (for duplicates)
function binarySearchFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching in left half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Test the functions with sorted arrays
console.log("=== Iterative Binary Search ===");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70));

console.log("\n=== Recursive Binary Search ===");
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(binarySearchRecursive([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70));

console.log("\n=== First Occurrence Binary Search ===");
console.log(binarySearchFirst([1, 2, 2, 2, 3, 4, 5], 2));
console.log(binarySearchFirst([1, 1, 1, 1, 1], 1));
console.log(binarySearchFirst([1, 2, 3, 4, 5], 3));
/*
    Linear Search
    -------------
    - It is a simple search algorithm that checks each element in a list or array
    - It is used to find a specific element in a list or array

    Pros and Cons Of Linear Search
    ------------------------------
    Pros:
    - Simple and easy to understand
    - Does not require the array to be sorted
    - Works on any type of data
    - Efficient for small arrays
    
    Cons:
    - Not efficient for large arrays
    - Time complexity is O(n)
    
    Pseudocode:
    The algorithm works as follows:
    1. Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
    2. If x matches with an element, return the index
    3. If x doesn’t match with any of elements, return -1

    Syntax:
    function linearSearch(arr, target)
        for i to arr.length
            if arr[i] equals target
                return i
        return -1

    
    Variation With Time Complexity:
    - Best Case: O(1) - Element found at the first position
    - Average Case: O(n/2) - Element found at the middle position
    - Worst Case: O(n) - Element not found or found at the last position


    Space Complexity:
    - O(1) - Constant space complexity

    Auxiliary Space Complexity:
    - O(1) - Constant auxiliary space complexity

    Stability:
    - Linear search is stable, meaning that if there are multiple occurrences of the same element, 
      the first occurrence will be returned.

    Comparison with Other Search Algorithms:
    - Linear search is slower than binary search for large arrays
    - Binary search requires the array to be sorted
    - Linear search is more efficient for small arrays

    Use Cases:
    - Linear search is used when the array is small or when the array is not sorted
    - Binary search is used when the array is large and sorted

    Time Complexity Graph:
    - Linear search has a time complexity of O(n)
    - Binary search has a time complexity of O(log n)


*/

// Procedure: 1 => Via IIFE (Immediately Invoked Function Expression) 
(function linearSearch(arr, target) {
  for(let i= 0; i <= arr.length -1; i++) {   
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
})([1, 2, 3, 4, 5], 3);




// Procedure: 2 =>  Via Native Function
function linearSearch(arr, target) {
  for(let i= 0; i <= arr.length -1; i++) {   
    if(arr[i] === target) {
      console.log(`Element found at index ${i} and target matched: ${target}`);
      return i;
    }
  }
  return {
    found: false,
    message: `Element not found in the array`
  }
}

// Call the function with an array and a target number
// and display the result
console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([10, 20, 30, 40, 50], 30));





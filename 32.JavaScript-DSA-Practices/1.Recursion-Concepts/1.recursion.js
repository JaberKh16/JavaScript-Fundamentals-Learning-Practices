/*
    Recursion
    ---------
    - It is a programming technique where a function calls itself to solve a problem
    - It breaks down a complex problem into smaller, similar subproblems
    - It requires a base case to stop the recursive calls

    Pros and Cons Of Recursion
    ---------------------------
    Pros:
    - Simple and elegant solution for complex problems
    - Reduces code complexity for problems with recursive nature
    - Natural fit for problems like tree traversal, factorial, Fibonacci
    - Easier to understand for divide-and-conquer algorithms
    
    Cons:
    - Can be inefficient due to function call overhead
    - Risk of stack overflow for deep recursion
    - May use more memory than iterative solutions
    - Harder to debug compared to iterative approaches
    
    Pseudocode:
    The algorithm works as follows:
    1. Define a base case that stops recursion
    2. Define a recursive case that calls the function with modified parameters
    3. Each recursive call should move closer to the base case
    4. Return results from recursive calls to build the final solution

    Syntax:
    function recursiveFunction(parameters)
        if base_case_condition
            return base_case_value
        else
            return recursive_function(modified_parameters)

    
    Variation With Time Complexity:
    - Best Case: O(1) - Base case reached immediately
    - Average Case: O(n) - Linear recursion depth
    - Worst Case: O(n) or O(2^n) - Depends on problem structure (e.g., Fibonacci)


    Space Complexity:
    - O(n) - Linear space for recursion stack in most cases
    - O(log n) - For divide-and-conquer problems
    - O(2^n) - For exponential recursion problems

    Auxiliary Space Complexity:
    - O(n) - Stack space for recursive calls
    - Each recursive call adds a new frame to the call stack

    Stability:
    - Recursion itself is neutral regarding stability
    - Stability depends on the specific algorithm implementation
    - Recursive solutions maintain the same stability properties as their iterative counterparts

    Comparison with Iterative Approaches:
    - Recursion is more elegant but may be less efficient
    - Iteration uses constant space, recursion uses O(n) space
    - Recursion can lead to stack overflow for large inputs
    - Iteration is generally faster due to less function call overhead

    Use Cases:
    - Tree and graph traversal algorithms
    - Divide-and-conquer algorithms (merge sort, quick sort)
    - Mathematical computations (factorial, Fibonacci, GCD)
    - Backtracking problems (N-Queens, Sudoku solver)
    - Problems with naturally recursive structure

    Time Complexity Examples:
    - Factorial: O(n)
    - Fibonacci (naive): O(2^n)
    - Binary Search: O(log n)
    - Merge Sort: O(n log n)


*/


// Example 1: Factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example 2: Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 3: Sum of array elements
function sumArray(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

// Example 4: Reverse a string
function reverseString(str) {
    if (str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Test the recursive functions
console.log('Factorial of 5:', factorial(5));
console.log('Fibonacci of 7:', fibonacci(7));
console.log('Sum of array [1,2,3,4,5]:', sumArray([1, 2, 3, 4, 5]));
console.log('Reverse "hello":', reverseString('hello')); 
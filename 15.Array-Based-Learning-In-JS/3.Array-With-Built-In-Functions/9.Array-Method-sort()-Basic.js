/*
    Array Method: array.sort()
    ==========================
    array.sort() method is used to sort the elements inside the array.  

    sort() method does the sorting in ascending order by default 
    if not specified.

    sort() doesn't take any parameters and perform the reverse
    operation.

    sort() method does modifies the original array, so mutable method.

    sort() method can take an optional comparator function as an
    argument to denote the ordering criteria. You can write a comparator
    function and pass the sort() method to override the default sorting
    behavior.
    For Example:
        
        function ascendingCompOrder(a, b){
            return (a - b); // to perform the sort in ascending order, if want descending then use (b-a)
        }
        numbers = [23, 4, 1, 45, 26, 65, 3 ,0, 1];
        numbers.sort(ascendingCompOrder);

    Also, can do the same with Arrow Function,
        numbers.sort((a, b)=> (a-b));
*/

// Declaring 'use strict' statement
'use strict';

// Declaring An Array
const playingItems = ['sports-car', 'dodge-ball', 'football', 'bat', 'table-tenis'];
playingItems.sort(); // sorting the order of elements
console.log(`Reversed Array Items: ${playingItems}`);


// Declaring Another Array
let numbersList = [23, 4, 1, 45, 26, 65, 3 ,0, 1, 15, 25, 20, 29, 6, 7, 48];
console.log(`Before Sorting With Comparator Function: ${numbersList}`);
// Wrting A Comparator Function To Denote The Sorting Order
numbersList.sort(function ascendingComparsismOrder(a, b){
    return (b - a); // to perform the sort in descending order, if want ascending then use (a-b)
});

console.log(`After Sorting With Comparator Function: ${numbersList}`);

// Declaring Another Array
let numbersList2 = [23, 4, 1, 45, 26, 65, 3 ,0, 1, 15, 25, 20, 29, 6, 7, 48];
console.log(`Before Sorting With Arrow Function: ${numbersList2}`);
// Writing An Arrow Function To Denote The Sorting Order
numbersList2.sort((a, b) => (b - a)); // to perform the sort in descending order
console.log(`After Sorting With Arrow Function: ${numbersList2}`);

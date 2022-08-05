/*
    Multiple Values Passing With Return Statement
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function mergedTwoArrays() {
    const arrayList1 = [1, 2, 4, 5, 6];
    const arrayList2 = [10, 20, 40, 50, 60];
    const mergedArrayList = [...arrayList1, ...arrayList2];
    return (`ArrayList1: ${arrayList1} ArrayList2: ${arrayList2}
    Finally The Merged Array --> mergedArrayList: ${mergedArrayList}`);

}

// Calling The Function
console.log(mergedTwoArrays());

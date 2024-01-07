/*
    Question-12. Find Duplicates Itens In An Array
*/

// defining the 'use strict' statement
'use strict';

// defining the array
const itemsArray = [1, 43, 6, 32, 1, 43, 78, 34, 1, 9];

const toFindDuplicates = function(arr){
    arr.filter((item, index) => arr.indexOf(item) !== index)
}
const duplicateElement = toFindDuplicates(itemsArray);
console.log(duplicateElement);



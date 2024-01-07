/*
    Array Method: array.findIndex(callbackFunction)
    ===============================================
    array.findIndex(callbackFunction) takes a callbackFunction and returns the
    index value of the search element if found and otherwise returns -1.

    findIndex() methods is generally used to find index value from a non primitive
    datatypes- objects, array. This is the difference with indexOf() method with findIndex()
    method.

    In case of duplicate finding it only returns the first found item index.

    Syntax:
        array.findIndex(callbackFunction)

*/

const fruits = ['banana', 'apple', 'guava', 'pine-apple', 'apple', 'lichie'];
const appleIndexValue = fruits.findIndex((fruitsItem) =>{
    return fruitsItem === 'apple';
});
console.log('Found applie index is: ', appleIndexValue);
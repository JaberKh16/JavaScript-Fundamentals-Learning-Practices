/*
    Array Method: array.splice()
    ============================
    array.splice() method is used to add, update and remove
    elements from an array. It main purpose is to delete elements
    from an array and returns an deleted elements with modifies the
    original array.

    To add an element using the splice() method we need to pass the
    position where we want to add and how many elements to delete
    starting with the position and the element to add.

    Syntax:
        1)  splice(start) ; 'start' position to denote from where to start changing.
        2)  splice(start, deleteCount) ; 'start' position to denote from where to start chaning
            and 'deleteCount' to indicate the no. of elements to be deleted from 'start'.
        3)  splice(start, deleteCount, item1, item2, ...itemN) ; 'start' position to denote from where to start chaning
            and 'deleteCount' to indicate the no. of elements to be deleted from 'start' and 'item' to denote
            what item to be inserted/added to the array starting from 'start'.

    splice() returns the array containing the deleted elements. If single element
    is removed, an array of single element is returned, if no element is removed then
    returns an empty array.

    Let's take little bit more information about the parameters of splice() method which are
    the following:
    a) 'start'      --> denotes the index at which to start changing the array.
                        passed value can be an positive and negative valued index.
                        If 'start' is '-Infinity' then it will begin from index 0.
                        If only 'start' is specified then perform the delete operation from
                        that point to end index.
                    
    b) 'deleteCount'--> denotes an integer value indicating the no. of elements in the array
                        to remove from 'start'. If 'deleteCount' is omitted or if its value is
                        equal to or larger than(array.length - start) then all the elements from 'start'
                        to the end of the array will be deleted means all the elements in the array
                        from start to end will be deleted.
                        However, it must not be omitted, if there is any 'item1' parameter is setted.
                        If 'deleteCount' is 0 or negative then no elements is removed and in that case
                        should specify atleast one 'item' so that it can be perform insert operation.                        
*/

// Declaring 'use strict' statement
'use strict';

// Declaring an array
const months = ['Jan', 'Feb', 'March', 'June', 'July', 'August', 'Nov', 'Dec'];
months.splice(1); // 'start=1' denotes the delettion start from index 1
console.log(`Month Items Deletion From Index-1: ${months}`);
console.log(months);

// Declaring another array
const monthsItems = ['Jan', 'Feb', 'March', 'June', 'July', 'August', 'Nov', 'Dec'];
monthsItems.splice(1, 0); // 'start=1' denotes the delettion start from index 1, though 'deleteCount=0' so no deletion occurs
console.log(`Month Items Deletion From Index-1: ${monthsItems}`);
console.log(monthsItems);

// Declaring another array
const monthsItemsValues = ['Jan', 'Feb', 'March', 'June', 'July', 'August', 'Nov', 'Dec'];
monthsItemsValues.splice(1, 5, 'Sep', 'Oct'); // 'start=1' denotes the delettion start from index 1, though 'deleteCount=5' so deletion until index 5 and add two items after that
console.log(`Month Items Deletion From Index-1: ${monthsItemsValues}`);
console.log(monthsItemsValues);


// Declaring another array
let fishItems = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
let removedItems = fishItems.splice(3, 1); // removing 1 element from index 3
console.log(`Removed Item is: ${removedItems}`);
console.log(fishItems);

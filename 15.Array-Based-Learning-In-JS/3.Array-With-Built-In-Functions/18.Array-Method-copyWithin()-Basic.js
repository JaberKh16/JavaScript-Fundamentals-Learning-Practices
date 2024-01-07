/*
    Array Method: array.copyWithin()
    ================================
    array.copyWithin() method copies some content from the array and organize the
    copied item within the specified array.

    Its a mutable method means it changes the original array.

    It is used when wanted to copy some items from the array in some position in that
    array.

    Syntax:
        array.copyWithin(targetIndex);                         // targetIndex specifies position 
        array.copyWithin(targetIndex, startIndex);            // targetIndex speciffies position  and
                                                              // startIndex specifies from which index 
                                                              // coping item will start
        array.copyWithin(targetIndex, startIndex, endIndex);  // same like before not endIndex will be excluded

    Note: Remember this method just copies item within the array it doesn't add new item thus length
    of the array doesn't change. It is like copy items at/from the targetted index and then after copy reshuffle
    with exisiting items.

*/

const fruits = ['banana', 'apple', 'guava', 'pine-apple', 'apple', 'lichie'];
fruits.copyWithin(3); // targetted from index 3 thus till index 3 no elements changes and then from 0 to length-1 add the existing
console.log(`${fruits}`);


// copying position is 2, copied from 4th index
fruits.copyWithin(2, 4);
console.log(`${fruits}`);   
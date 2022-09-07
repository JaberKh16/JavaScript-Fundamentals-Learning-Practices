/*
    JavaScript ES6 Features- Set Data Structure
    ===========================================
    Set is an JS Object which allows to use collection of unique values.
    It can contains any type of values(primitives or object reference).
    It stores elements in insertion order and doesn't contain any keys
    like Map Object.

    To create a Set object use the following syntax-
    Syntax-
        const setData = new Set(iterable); // takes any iterables(array, objects)
    
    Set Based Properties
    --------------------
    1) size ---> returns the no. of elements in the Set.

    Set Based Methods
    -----------------
    1) add(element)     --> appends the specified element at end of the Set object
                            and returns the Set object. Chaining of add() method is
                            supportable.
    2) has(element)     --> checks if the specified element is existed and returns a
                            boolean 'true' if exists, otherwise returns 'false'.
    3) values()         --> returns a new Iterator object that contains the values 
                            for each element available in the Set object in an
                            insertion order.
    4) entries()        --> returns a new Iterator object that contains an array
                            of [value, value] in an insertion order.
    5) delete(element)  --> removes the specified element and returns a boolean value.
    6) clear()          --> empties the whole Set object.


*/

// defining the 'use strict' statement
'use strict';

// creating a Set 
const emptySet = new Set();
console.log(emptySet);

// adding a single element inside the Set
emptySet.add('Banana');
console.log(emptySet);

// adding more elements through chaining
emptySet.add('Apple').add('Guava').add('PineApple').add('Lichie');
console.log(emptySet);

// checking whether Set contains an particular element or not
const isBananaAvailable = emptySet.has('Banana');
console.log(isBananaAvailable);
console.log(emptySet);


// to delete particular element from the Set
const deleteApple = emptySet.delete('Apple');
console.log(deleteApple);
console.log(emptySet);

const osReleaseDates = {
    iOS: 'June 29, 2007',
    Android: 'September 23, 2008',
    SymbianOS: 'June 5, 1997',
    HarmonyOS: 'August 9, 2019',
    PalmOS: 'March 10, 1996',
    OxygenOS:'March 14, 2015'
}
const mobileOSSet = new Set(['iOS', 'Android', 'Symbian', 'Harmony OS', 'Palm OS', 'Oxygen', osReleaseDates])
console.log(mobileOSSet);

// checking the size of the Set object
console.log(mobileOSSet.size);

// checking for the available values inside the Set
const availableValues = mobileOSSet.values();
console.log(availableValues);

// destructuring to print only the values
const destructuringValues = [...availableValues]
console.log(destructuringValues)


// checking for the available values inside the Set
const availableEntries = mobileOSSet.entries();
console.log(availableEntries);
for (let [key, value] of availableEntries){
    console.log(key, value);
}


// to clear the Set object
const emptiedMobileOSSet = mobileOSSet.clear();
console.log(emptiedMobileOSSet); // returns 'undefined' though Set is cleared
console.log(mobileOSSet);


// passing a string to a Set 
const storeName = "Walmart";
const setCharacters = new Set(storeName);
console.log(setCharacters);


// remvoving duplicates from an array
const names = ['John', 'Nick', 'Smith', 'Berry', 'Jonathan', 'Nick'];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);



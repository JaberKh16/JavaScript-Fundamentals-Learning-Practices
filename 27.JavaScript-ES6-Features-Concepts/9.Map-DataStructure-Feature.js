/*
    JavaScript ES6 Features- Map Data Structure 
    ===========================================
    Map is collection of key/value pairs similar to an JS Object.
    It stores the key/value pairs in the insertion order(the order
    keys/values are being inserted).

    Map can take any type of JS collections(objects), data types(primitives) 
    and functions as a key in the Map whereas in case of JS Object it can 
    only take Strings and Symbols as a key.
    
    To creata a Map is very easy and a Map can be created through 
    2 ways which are the following-

    Syntax-
        1)  const mapData = new Map(); // to create an Empty Map
        2)  const mapData = new Map([
                [key1, value1],
                [key2, value2],
            ]); // creating through an iterable

    Map Based Properties
    --------------------
    1) size ---> returns the current Map size(total no. of entries).

    Map Based Methods
    -----------------
    1) get(key)         --> to get the specified key value, if not existed 
                            then returns 'undefined'
    2) set(key, value)  --> to set the specified key/value in the Map, if already
                            existed then overwrites the previous key value.
    3) delete(key)      --> to delete the specified key value and returns 'true' if
                            existed, otherwise returns 'false'
    4) clear()          --> to clear all the key/value pairs from the Map.
    5) has(key)         --> checks if Map has the specified key and returns a boolean value.
    6) values()         --> returns a new Iterator that contains the values in insertion order.
    7) keys()           --> returns a new Iterator that contains the keys in insertion order.
    8) entries()        --> returns an Iterator which has an array of [key-value] pair in 
                            insertion order.

*/

// define the 'use strict' statement
'use strict';

// creating a empty Map
const emptyMap = new Map();
console.log(emptyMap); // returns the empty Map having the size 0

// adding a single item in the Map
emptyMap.set('Name', 'Rach');
console.log(emptyMap);


const personInfo = {
    fullName: "Jacob Singa",
    age: 34, 
    gender: 'Male',
    profession: 'Accountant'
}
emptyMap.set("obj_key", personInfo); // including the objecs as value in Map
console.log(emptyMap)

// getting the key value from the Map
console.log(emptyMap.get('Name'));
console.log(emptyMap.get('obj_key'));

// checking whether the key existed and if existed then retreive that key value
if(emptyMap.has('obj_key')){
    const personName = emptyMap.get('obj_key').fullName;
    const personProfession = emptyMap.get('obj_key').profession;
    console.log(personName + " " + personProfession)
}



// creating another Map
const mapData = new Map([
    ['name', 'john'],
    ['age', 34],
    ['gender', 'male'],
    ['language', ['C++', 'JavaScript', 'Python']],
    ['known_framework', ['NodeJS', 'DJango', 'ReactJS']],
    ["func", function(){return new Date('1994-10-14')}],
    ["object", {salary:50000, petName:'Muez', experienced:'3years'}],
])

// checks its size
console.log(`mapData Map size is: ${mapData.size}`);
console.log(`mapData Map is: ${mapData}`);
console.log(mapData)

// getting all the entries in the Map
const allEntries = mapData.entries()
console.log(allEntries);
Array.from(allEntries).forEach((keyandvalue, index) =>{
    console.log(`Index is: ${index} \t Key/Value is: ${keyandvalue}`);
});


// getting all the keys 
const allKeys = mapData.keys();
console.log(allKeys);


// getting all the values
const allValues = mapData.values();
console.log(allValues);

// to delete particular key from the Map
const deleteFunctionKey = mapData.delete('func');
console.log(deleteFunctionKey);
console.log(mapData); // deletion happens on actual Map


// to clear out the Map
const clearedMap = mapData.clear();
console.log(clearedMap); // returns nothing means 'undefined'
console.log(mapData)
/*
    Object Concept In JS
    ====================
    Objects In JS are nothing but a datastructure type in JS
    which is used to hold multiple variable with their corresponding
    values as key-value pair combination.

    Object can have properties as primitive datatypes such as- (string, number, boolean,
    array, object) and methods such as- (every type JS functions) to perform specific
    task. 

    Syntax:
        Object creation can be possible in two ways-
            1) with object literal ---> using {}
                e.g -- 
                    let object_name = { key1:valu1, key2:value2, key3:value3, .. keyN:valueN};
            2) with constructor ---> new Object()    
                e.g -- 
                    let object_name = new Object() 

    Accessing Object Properties and Methods
    ---------------------------------------
    To access the object insidal value their corresponding 'key' is being used thus 
    accessing values follows below syntax where accessing object insidal values
    in two ways can be seen,

    first way of accessing --> using [] literal though object is an array,
        object_name['key']                  ; to access the specified 'key' value
    
    second way of accessing --> using dot(.) operator,
        object_name.key/propertyName        ; to access the specified 'key' or property value
*/

// Declaring 'use strict' statement
'use strict';

// Creating A Object  
let person = {name: "Jhon", age:34, profession:"C++ Developer", salary:45000.00};

// Accessing The Object Using Two Ways
console.log(`Person Name: ${person.name}`); // get the value of the prototype(key) value
console.log(`Person Profession: ${person['profession']}`); // get the value of the prototype(key) value

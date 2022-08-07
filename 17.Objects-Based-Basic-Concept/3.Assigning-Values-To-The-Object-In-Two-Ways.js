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

    
    Assigning Values To The Object
    ------------------------------
    Inserting a value on Object can be done in two ways which are the follwing:
        1) with dot(.) operation insertion
            e.g --> object_name.propertyName = value;
        2) with ['key-name/propertyName'] literal
            e.g --> object_name['key-name'] = value;
*/

// Declaring 'use strict' statement
'use strict';

// Creating A Object
let person = {name: "Jhon", age:34, profession:"C++ Developer", salary:45000.00};

// Assigning values to the object
person.gender = 'Male'; // assigning with dot(.) operator
person['jobStatus'] = 'Active';


// Accessing The Object Using Two Ways
console.log(`Object Person: ${person}`); // seeing the object 'person'

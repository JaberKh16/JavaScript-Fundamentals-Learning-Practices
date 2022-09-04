/*
    JSON Fundamentals Concepts Based Materials
    ==========================================
    JSON stands for JavaScript Object Notation. It is a light weight
    data interchange format which is used to send data back and forth
    in server as a text.

    It is actually based on JavaScript Object Literal. Arguably it 
    replaced XML and often used with AJAX.
    
    JSON can be parsed with most modern programming languages.

    JSON Datatypes
    --------------
    1) Number   ---> integer/floats
    2) String   ---> string of unicode character wrapped with ""
    3) Boolena  ---> true or false
    4) Array    ---> ordered list []
    5) Object   ---> unordered collection of key/value pairs
    6) Null     ---> An empty value(denoted as 'null') 
    
    JSON Syntax Rules
    -----------------
    1) uses key/value pairs ==> {"key":"value"};
    2) uses double quotes "" around the key/value
    3) must use the specified data types
    4) file type is ".json"
    5) MIME type is "Application/json"

    JSON Example Code
    -----------------
    {
        "name": "X",
        "age": 35, 
        "address":{
            "street":"5 main street",
            "city": "Boston"
        },
        "languages": ["C++", "Java", "JavaScript"]
    }

    JSON Based Methods
    ------------------
    1) JSON.stringify(obj) --> to convert JS object/array to a JSON string.
    2) JSON.parse(json)    --> to convert JSON string to a JS object 

*/

// defining the 'use strict' statement
'use strict';

// converting a JS object to JSON
function convertingToJSON(obj){
    const json_data = JSON.stringify(obj);
    return json_data;
}

// converting a JSON to JS Object
function convertingJSONToJSObject(json_data){
    const jsObj = JSON.parse(json_data);
    return jsObj;
}

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age : 34,
    city: "NewYork",
    language: ['spanish', 'english']
};

const jsonData = convertingToJSON(personInfo); // converting the object to string and then pass it
console.log(jsonData);

const jsObject = convertingJSONToJSObject(jsonData);
console.log(jsObject);

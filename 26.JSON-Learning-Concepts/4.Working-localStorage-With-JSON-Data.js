// defining  the 'use strict' statement
'use strict';

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age:34,
    birthdate: "function (){ return  new Date('1994-04-14');}",
    address:{
        street:"5 main st",
        city:"Boston"
    },
    language: ['spanish', 'english']
};


// storing into localStorage
(function storingDataToLocalStorage(personInfo){
    const convertedObj = JSON.stringify(personInfo);
    localStorage.setItem('person-data', convertedObj);
})(personInfo);


// retrieving from localStorage
(function storingDataToLocalStorage(){
    const key = 'person-data'
    console.log(localStorage.getItem(key));
})();
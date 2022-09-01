/*
    JavaScript Web Storage API
    ==========================
    Web Storage API is simple API for storing and retreiving data in 
    the browser.

    Web Storage API provides two types of Storage API which are an 
    objectt to access to storage then allows to store, add delete
    and modify data item for that domain.

    Types Of Web Storages APIs
    ---------------------------
    1) localStorage     --> allows to save key/value pairs in a web browser.
                            generally stores the data with no expiration date.
    2) sessionStorage   --> allows to save key/value pairs in a web browser.
                            generally stores the data for single session.
    

    localStorage Object
    -------------------
    localStorage Object provides a access to the local storage for a particular
    website.It allows to add, modify and delete data items for that domain.
    The data in stored with no expiration data and will not be deleted until the
    browser is closed. Data can be available for days, weeks and years.

    sessionStorage Object
    ---------------------
    sessionStorage Object is identical to the localStorage Object, only difference
    is that it stores the data for one single session. Data is deleted when the
    browser is closed.


    Storage Object Properties and Methods
    --------------------------------------
    1) key(n)                  -->  returns the name of the nth key in the storage.
    2) length                  -->  returns the no. of data items stored in the Storage Object.
    3) getItem(keyname)        -->  returns the value of the specified keyname.
    4) setItem(keyname, value) -->  add that specified key to the storage or update
                                    that specified key's value if it already exists.
    5) removeItem(keyname)     -->  removes that specified key from the storage.
    6) clear()                 -->  emptied all the keys out of the storage.


*/

// defining the 'use strict' statement
'use strict';



// setting a data in the local storage
const setLocalStorageValue = document.getElementById('setting-storage-value');
setLocalStorageValue.addEventListener('click', function (){
    // declaring the key and value
    const key = 'client-browser';
    const value = 'Chrome';
    settingLocalStorageValue(key, value);
})

function settingLocalStorageValue(key, value){
    return localStorage.setItem(key, value);
}

// getting a data from the local storage
const getLocalStorageValue = document.getElementById('getting-storage-value');
getLocalStorageValue.addEventListener('click', function (){
    // document.getElementById('storage-value').innerText = localStorage.getItem(key);
    const key = 'client-browser';
    gettingLocalStorageValue(key);
});

function gettingLocalStorageValue(key){
    return alert(window.localStorage.getItem(key));
}


// calling those functions
// const settedData = setDataToLocalStorage("client-browser", "Chrome");
// console.log(`Local Storage Setted Data: ${settedData}`);

// removing a data from the local storage
const removeLocalStorageValue = document.getElementById('removing-storage-value');
removeLocalStorageValue.addEventListener('click', function (){
    const key = 'client-browser';
    removingLocalStorageValue(key);
});

function removingLocalStorageValue(key){
    return alert(localStorage.removeItem(key));
}

// clear the local storage
const clearLocalStorageValue = document.getElementById('clear-storage-value');
clearLocalStorageValue.addEventListener('click', ()=>{
    clearningLocalStorageValue();
});

function clearningLocalStorageValue(){
    return localStorage.clear();
}
// defining the 'use strict' statement
const parseAlbumFile = function(){
    const promise = new Promise((resolve, reject)=>{
        fetch("http://localhost:5500/26.JSON-Learning-Concepts/JSON-Based-Project/html/system-of-down-albums.json")
        .then(responseData=>{
            // console.log(responseData);
            if(responseData.status === 200){
                resolve(responseData);
            }
            else{
                reject(responseData.status);
            }
            return responseData.text();
        }).then(data=>{
            console.log(JSON.stringify(data));
            // return JSON.stringify(data);
        })
        .catch(error=>{
            console.log(error.message);
        })
    })
    return promise;
}

const jsonData = parseAlbumFile();
console.log(jsonData);
const albumList = JSON.parse(jsonData);
console.log(albumList);
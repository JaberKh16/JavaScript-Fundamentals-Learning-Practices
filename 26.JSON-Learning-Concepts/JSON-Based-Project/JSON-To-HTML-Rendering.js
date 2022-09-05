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
            
        }).then(data =>{
            console.log(data);
            dataArray = JSON.parse(data);
            dataArray["album_list"].forEach(album =>{
                console.log(album)
            });
            return dataArray;
                
        })
        .catch(error=>{
            console.log(error.message);
        })
    })
    return promise;
}


const jsonData = parseAlbumFile();
// console.log(jsonData);
// const albumList = parsingJSONToObject(jsonData);
// console.log(albumList);

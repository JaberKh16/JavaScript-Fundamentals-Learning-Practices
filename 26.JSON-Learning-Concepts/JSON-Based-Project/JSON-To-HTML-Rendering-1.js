// defining the 'use strict' statement
'use strict';

function renderingHTMLTemplate(albums){
    console.log(albums);
    let repeatedBandName = 0; // to store the band name if repeated
    const div = document.getElementsByClassName('album-list-div');  
    // console.log(div);
    div[0].innerHTML = `
    <h1 class="heading"> ${albums['album_list'].map(function(album){
        console.log(album);
        const bandName = album.band_name;
        
        // console.log(typeof bandName);
        if(bandName === 'System Of Down'){
            repeatedBandName++;
            if(repeatedBandName == 1){
                return bandName;
            }
        }
        else{
            return null;
        }
    }).join('')} Listed
    (${albums['album_list'].length}) Albums</h1>`;
}


const parsingJSONContent = async function(){
    const fetchingData = await fetch("http://localhost:5500/26.JSON-Learning-Concepts/JSON-Based-Project/html/system-of-down-albums.json");
    const jsonData = await fetchingData.json();
    // console.log(jsonData); // returning the JS object
    renderingHTMLTemplate(jsonData);
}

const album_list = parsingJSONContent();
// console.log(album_list);

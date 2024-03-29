// defining the 'use strict' statement
'use strict';

function parsingInvidualAlbumSongs(songList){
    console.log(songList);
    let generatedDiv = "";
    // for(let i = 0; i<song.length; i++){
    //     // console.log(song[i]);
    //     generatedDiv += `<ul><li>${song[i]}</li></ul>`        

    // }
    songList.forEach((element, index) => {
        console.log(element, index);
        if(index === 7){
            generatedDiv = `<span><div><ul><li>${element}</li></ul></div></span>`;
            
        }
    });

    // const generatedDiv = `
    // <div> ${} </div>`;
    return generatedDiv;
}


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
        // checking though having a single band info
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
    (${albums['album_list'].length}) Albums</h1>
    <div class="albums-div"> 
        <div class="album"> ${albums['album_list'].map(function(album){
            return `<div class="image-div"> 
                <img class="img-size" src="${album.album_cover}" alt="Unavailable">
                <span class="album-misc__info">
                    <hr>
                    <span class="album-genres">Genres: ${album.genres}</span>
                    <br><br>
                    <span class="album-releasedate">Release Date: ${eval("("+album.release_date+")").getMonth()}</span>
                    <hr>
                </span>
                <h2 class="album-ttile"><strong> Album Name: ${album.album_name} </strong></h2>
            </div>`;
        }).join('')}</div>
        <span class="song-list__div"> ${albums['album_list'].map(function(album){
                const songsList = album.songs_list;
                    // console.log(song.length)
                    // return parsingInvidualAlbumSongs(song);
                    // return `<div><ul>
                    //             <li class="songs-list"> ${} </li>
                    //         </ul></div>`;
                    // return song;
                return parsingInvidualAlbumSongs(songsList);
        }).join('')} </span>
    </div>`;
    
}


const parsingJSONContent = async function(){
    const fetchingData = await fetch("http://localhost:5500/26.JSON-Learning-Concepts/JSON-Based-Project/html/system-of-down-albums.json");
    const jsonData = await fetchingData.json();
    // console.log(jsonData); // returning the JS object
    renderingHTMLTemplate(jsonData);
}

const album_list = parsingJSONContent();
// console.log(album_list);

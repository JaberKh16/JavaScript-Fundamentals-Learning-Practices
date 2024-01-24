const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };
  
        req.send();
    });
    return promise;
}

// calling the promises function
let promise = getPromise(ALL_POKEMONS_URL);

const consumer = () => {
    promise.then(
        (result) => {
            console.log({result}); // Log the result of 50 Pokemons
        },
        (error) => {
            console.log('We have encountered an Error!', {error}); 
        }
    );
}

consumer();
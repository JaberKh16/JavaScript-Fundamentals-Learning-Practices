const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("There is an Error!");
            }
        };
        req.send();
    });
    return promise;
}


let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);


Promise.allSettled([promise_1, promise_2, promise_3])
    .then((result) =>{
        console.log(result);
    }).catch((error) =>{
        console.log(error);
    })
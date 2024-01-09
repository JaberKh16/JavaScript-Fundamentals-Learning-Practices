
// forEach() with array
const marvelHeores = [{
    GhostRider : ['Nicolas Cage', 'Robi Reyes'],
    Marvels : ['The Marvels', 'MS Marvels', 'Marvels-2'],
    IronMan : ['Iron Man', 'Iron Man-2', 'Iron Man-3'],
    Avengers : ['CivilWar', 'The Avengers', 'Age of Ultron', 'Infinity War', 'End Game'],
    Hulk : ['Hulk', 'The Incredible Hulk'],
    Loki : ['Loki: Season1', 'Loki: Season2'],
}]; 

for(let heroes of marvelHeores){
    console.log(heroes);
}

// marvelHeores.forEach((element, index, array) => {
//     const movies = element[0].entries();
//     console.log(movies);
//     console.log(`Marvel Movie Series: ${element}`);
// });
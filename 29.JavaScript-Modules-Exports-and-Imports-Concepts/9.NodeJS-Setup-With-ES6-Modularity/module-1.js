// // defining an object
// const monkey = {
//     'name': 'foo',
//     'species': "Capuchin",
//     'hobbies': ['stealing', 'sleeping', 'jumping'],
//     'age':10
// };

// const printSpeciesInfo = () =>{
//     // returing an object holds an object with single item containg array of values
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             monkey.age++;
//             chracteristicsInfo : {
//                 passInfo :  [monkey.name ,  monkey.species , monkey.hobbies, monkey.age]      
//             }
//         }, 2000);
//         resolve(monkey);
//     });
// }


// const awaitedPromises = await printSpeciesInfo();
// console.log("Promises awaited started.......");

// export  { awaitedPromises as awaitedmonkeyPrintInfo };
// export default monkey;


// defining an object
const monkey = {
    'name': 'foo',
    'species': "Capuchin",
    'hobbies': ['stealing', 'sleeping', 'jumping'],
    'age': 10
};

const printSpeciesInfo = () => {
    // returning an object that holds an object with a single item containing an array of values
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            monkey.age++;
            resolve({
                chracteristicsInfo: {
                    passInfo: [monkey.name, monkey.species, monkey.hobbies, monkey.age]
                }
            });
        }, 2000);
    });
};

// Using async function to await the promise
const awaitedPromises = await printSpeciesInfo();
console.log("Promises awaited started.......");
  


export { awaitedPromises as awaitedmonkeyPrintInfo };
export default monkey;

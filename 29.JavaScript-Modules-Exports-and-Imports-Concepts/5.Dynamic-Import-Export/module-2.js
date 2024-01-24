/*
    Default Modules
    ===============
    Default is a technique to export/import variables as without caring about variable names.
    JS Engine already detect the variable when imported the file containing that variable and
    then aliases that variable or used as same.

    Properies:
        a. default module name can atmost be in one in single file setup with bunch of modularity codes

    Syntax:
        a. For Exporting:
            1. export default { varName };
            2. export default varName = ()=>{};

        b. For Importing:
            1. import varName from "./fileName.js";
            2. import varName as someVarName from "./fileName.js";
*/

// defining an object
const monkeySpecies = {
    'name': 'foo',
    'species': "Capuchin",
    'hobbies': ['stealing', 'sleeping', 'jumping']
};

const printSpeciesInfo = () =>{
    // returing an object holds an object with single item containg array of values
    return {
        chracteristicsInfo : {
            passInfo :  [monkeySpecies.name ,  monkeySpecies.species , monkeySpecies.hobbies]      
        }
    }
}

// export as default module
export default {printSpeciesInfo};
// export as named module
export {monkeySpecies}

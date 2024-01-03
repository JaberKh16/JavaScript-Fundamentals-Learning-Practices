/*
    Common JS Module System
    =======================
    CommonJS Module System are shortly called as CJS Modular System. It is used in NodeJS.
    With VanilaJS Modular System it does provide the support of conditional modular export/import
    but CommonJS does. But limitation with CommonJS is though its build on NodeJS to run this type
    of modularity system required NodeJS, it doesnt have the browser console support. For that need
    to used different librarie like - Babel to convert the CommonJS code into VanilaJS to get the
    support of browser console or NodeJS environment running.

    Syntax:
        a) For Exporting:

                module.exports = { varName1, varName2 }; // export as object
                module.exports = varName; // export as single variable
                module.exports = {
                    var1: varName1,
                    var2: varName2
                }

        b) For Importing:
                const varName = require("./filePath");

*/

// Single Named Export
const summation_result = (numbers) =>{
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;
}

// exporting variables
module.exports = {
    summation: summation_result
}
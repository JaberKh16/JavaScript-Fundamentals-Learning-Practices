/*
    Named Modules:
    =============
    The way of exporting/importing with named variables are called Named Modules. 
    
    Properties:
        1) with named modules technique named needs to be match while importing.
    

    Exporting Ways:
    ===============
    ---> exporting can be done in two ways:
            1) using 'export' with the variable declaration
                e.g:
                    export const varName = 'somevalue';
                
            2) using 'export' at the end
                e.g:
                    export { varName };

    ---> when exporting, it can export single or multiple variables at a time.

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
export {summation_result};
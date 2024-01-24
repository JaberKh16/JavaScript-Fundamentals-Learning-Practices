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
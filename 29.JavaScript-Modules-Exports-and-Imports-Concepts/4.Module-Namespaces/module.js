const options = function(){
    return {
        library: {
            name : 'Jquery',
            version: '4.5.5',
            linktype: "https://jquery.com/v/4.5.5"
        }
    }
}

// defining an object
const monkey = {
    'name': 'foo',
    'species': "Capuchin",
    'hobbies': ['stealing', 'sleeping', 'jumping']
};

const printSpeciesInfo = () =>{
    // returing an object holds an object with single item containg array of values
    return {
        chracteristicsInfo : {
            passInfo :  [monkey.name ,  monkey.species , monkey.hobbies]      
        }
    }
}

export  { options, printSpeciesInfo as monkeyPrintInfo };
export default monkey;
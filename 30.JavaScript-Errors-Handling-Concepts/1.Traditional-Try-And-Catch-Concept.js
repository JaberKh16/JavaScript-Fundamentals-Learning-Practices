const number = 1;
const divisionOperation = (number)=>{
    try {
        const div = number/0;
    } catch (error) {
        console.log(error);
    }
}

divisionOperation(number);
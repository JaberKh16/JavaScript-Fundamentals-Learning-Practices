// create a Promise
function summation(){
    const allNumbers = Array.from(arguments);
    console.log(allNumbers);
    const totalSum = allNumbers.reduce((acc, current) => acc + current, 0);
    return totalSum;
}

const promise = new Promise((resolve, reject)=>{
    const timeout = 2000;
    setTimeout(() => {
        const result = summation(1, 2, 4, 5, 6, 7); // resolve case
        // const result = summation(1, 2, 4, 5, 6, 7, 'a'); // reject case
        if(result != undefined){
            if(!isNaN(result)){
                // resolver returning a value
                resolve(result);
            }
            reject(new Error('Invalid number format'));
        }else{
            reject(new Error('Callback resulted undefined'))
        }
        
    }, timeout);
});
console.log(promise);
promise
.then(res => console.log(`Result: ${res}`))
.catch(error => {
    console.log(`${error}`);
});

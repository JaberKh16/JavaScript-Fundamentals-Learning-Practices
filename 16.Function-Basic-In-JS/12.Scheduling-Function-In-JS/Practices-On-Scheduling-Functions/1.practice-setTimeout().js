// with 'var' which has Global Scope
function runsTimeouts(){
    for(var i = 1; i <= 5; i++){
        setTimeout(()=>{
            console.log(i);
        }, i*1000);
    }
    console.log('Pritning');
}

// though the loops was running and exhausted at 6 and i holdes the reference which has 6 now
// Closure holds the reference so i is 6 now thus when after setTimeout expired it has i value as 6 
runsTimeouts(); // returns 'Printing' 6 6 6 6 6 


// with 'let' which has Block Scope
function runsTimeouts2(){
    for(let i = 1; i <= 5; i++){
        setTimeout(()=>{
            console.log(i);
        }, i*1000);
    }
    console.log('Pritning');
}
runsTimeouts2();



// setup with 'var' using Closure
function runsTimeoutsWithClousre(){
    for(var i = 1; i <= 5; i++){
        const closureFunc = function(x){
            setTimeout(()=>{
                console.log(x);
            }, x*1000);
        }
        closureFunc(i); // functin has local scope thus everytime 'i' gets a new copy for the closureFunc()
    }
    console.log('Pritning');
}
runsTimeoutsWithClousre();
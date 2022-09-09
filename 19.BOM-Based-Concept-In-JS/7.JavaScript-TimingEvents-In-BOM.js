/*
    JavaScript BOM Based Object - TimingEvents Object
    =================================================
    TimingEvents is one of the BOM tools to work with the timing related events.
    BOM has 4 types of timing events which are the following-
        
        1) setTimeout(callback, timer)      ---> to set a timer for a function to call for once.
        2) setInterval(callback, timer)     ---> to set a timer for a function to call repeatedly.
        3) clearTimeout(timervariable)      ---> to clear the setTimout().
        4) clearInterval(timervariable)     ---> to clear the setInterval().

*/

function settingTimeout(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    // console.log(i); // resulted 5 because of the 'window' having the access of variable 'i'
}

const callingSetTimout = setTimeout(settingTimeout, 1000);
// if(callingSetTimout){ // if 'callingSetTimout' has some value then clear that
//     clearTimeout(callingSetTimout);
// }

function settingInterval(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // resulted 5 because of the 'window' having the access of variable 'i'
}
const callingSetInterval =  setInterval(settingInterval, 1000);
if(callingSetInterval){
    clearInterval(callingSetInterval);
};
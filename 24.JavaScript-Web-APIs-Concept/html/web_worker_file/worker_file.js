let i = 0;
function generateNumbers(){
    while(i< 10000000){
        i++;
    }
    postMessage(i); // posting the message to the event
}

generateNumbers();
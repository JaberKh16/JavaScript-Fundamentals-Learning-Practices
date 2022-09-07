/*
            Digital Clock Project
*/

// defining the 'use strict' statement
'use strict';

// defining the function 
function digitalClock(){
    const dateTime = new Date();             // to get the datetime
    const day = dateTime.getDay();            // to get the day 
    const hours = dateTime.getHours() + "";   // to get the hours as string
    const minutes = dateTime.getMinutes()+ ""; // to get the minutes as string
    const seconds = dateTime.getSeconds()+ ""; // to get the seconds as string

    // to solve the issue while having the singe digit 
    if(hours.length < 2){
        hours = '0' + hours;
    } 
    if(minutes.length < 2){
        minutes = '0' + minutes;
    } 
    if(seconds < 2){
        seconds = '0' + seconds;
    }

    const weekDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                            'Thursday', 'Friday', 'Saturday'];
    let clock = weekDaysName[day] + ', '+ hours + ':' + minutes + ':' + seconds;
    // console.log(clock);
    document.getElementById('clock-value').innerHTML = clock;
}

digitalClock();
setInterval(digitalClock, 1000); // to call invoked function every 1s

/*
    Date Object Based Methods Concept
    =================================
    There are two types of methods for Date object which are generally
    stated as the following-
        
        1) Date GET Methods
        2) Date SET Methods

    Date GET Methods
    ----------------
    1) getDate()        --> to get the day as a number(1-31).
    2) getDay()         --> to get the weekday as a number(0-6).
    3) getFullYear()    --> to get the four digit year(yyyy).
    4) getHours()       --> to get the hours(0-23).
    5) getMiliseconds() --> to get the miliseconds(0-999).
    6) getMinutes()     --> to get the minutes(0-59).
    7) getMonth()       --> to get the month(0-11).
    8) getSeconds()     --> to get the seconds(0-59).


    Date SET Methods
    ----------------
    1) setDate()        --> to set the day as a number(1-31).
    2) setFullYear()    --> to set the four digit year(yyyy).
    3) setHours()       --> to set the hour(0-23).
    4) setMiliseconds() --> to set the miliseconds(0-999).
    5) setMinutes()     --> to set the minutes(0-59).
    6) setMonth()       --> to set the month(0-11).
    7) setSeconds()     --> to set the seconds(0-59).

    Note: If a setFullYear() is applied and assign to some variable then
    that variables result some numeric value which basically denotes
    a miliseconds time from 1970(when first the computer time starts).

*/

const setDateTime = new Date("1994-12-23 04:43:56");
console.log(setDateTime);

// getting day value
const getDay = setDateTime.getDate();
console.log(getDay);

// getting year value
const getYear = setDateTime.getFullYear();
console.log(getYear);

// getting hours value
const getHours = setDateTime.getHours();
console.log(getHours);


// setting year value
const setYear = setDateTime.setFullYear(1998);
console.log(setYear);


// setting hours value
const setHours = setDateTime.setHours(10);
console.log(setHours);

// setting minute value
console.log(setDateTime.setMinutes(45));
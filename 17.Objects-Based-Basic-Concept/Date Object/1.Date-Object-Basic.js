/*
    JavaScript Built-in Object- Date Object
    =======================================
    JavaScript Built-in Object 'Date' Object is used to deal with the
    dates and times using JS.

    Syntax-
        const datetime = new Date(); // returns a current date along with timezone
    
    Note: Curren Date and Time determines by the computer clock or the Date and Time
    setted inside the Computer ROM. If the timezone being change through the settings
    then it will reflect accordingly.

    To create a new datetime can be possible and to that there are different formats-

        1) new Date("Jan 20, 2010"); // partially written month with date and year specified
        2) new Date("January 20, 2010"); // fully written month with date and year specified
        3) new Date("1994-10-24"); // year-month-date format way
*/

// getting current datetime
const todayDateTime = new Date(); // returns the current datetime
console.log(todayDateTime);

// setting new datetime(with just month and year)
const settedDateTime1 = new Date("January 27, 1998");
console.log(settedDateTime1);


// setting new datetime(with just month and year)
const settedDateTime2 = new Date("Jan 27, 1998");
console.log(settedDateTime2);


// setting new datetime (with month and year in different format)
const settedDateTime3= new Date("1997-3-13");
console.log(settedDateTime3);

// setting new datetime (with month and year in different format)
const settedDateTime4= new Date("1997/3/13");
console.log(settedDateTime4);

// setting new datetime
const settedDateTime5 = new Date("January 27, 1998 10:20:30");
console.log(settedDateTime5);



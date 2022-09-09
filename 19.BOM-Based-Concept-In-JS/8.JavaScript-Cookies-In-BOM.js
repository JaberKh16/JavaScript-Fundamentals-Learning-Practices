/*
    JavaScript BOM Based Object - Cookies 
    =====================================
    JavaScript Cookies are nothing but the meta information about the client informations
    saved in web browser.
    Cookies basically are the data stored in small text files on client's computer.

    Advantage Of Cookies
    ---------------------
    When a web server has sent a web page to browser because of client request to particular
    web page, after serving the request server generally close the connection thus the server
    forgests everything about the client. Thus 'Cookies' comes into play to set some information
    about the client so that when that client again visits that web page, server gets that client
    user information from the 'Cookie' and that client doesnot have to go through again the
    client-server request/response process thus saves a lot of delaying.

    Cookies Syntax
    --------------
    1) document.cookie = "cookie_name = value";
    2) document.cookie = "cookie_name = value; expires= ; path=/";

    Paramters In Cookie
    -------------------
    1) string   --->    "key=value"
    2) expires  --->    to add an expiry date(in UTC time). By default, Cookie is deleted when the 
                        browser is closed.
    3) path     --->    to tell the browser what path to look for the Cookie. By default, the Cookie
                        belongs to the current page.

    Working With Cookie
    -------------------
    a)  Read Cookies
        ------------
        let readCookie = document.cookies; // returns all cookies in a singe string

    b)  Change a Cookie
        -------- ------
        document.cookie = "username= John; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
    
    c)  Delete a Cookie
        ---------------
        deleting a cookie is very simple just specify the 'expires' to any past date.

            document.cookie = "username=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/"
*/

// setting up a cookie
document.cookie= "Client-Name=Jaber; expires=new Date('September 10, 2022 10:00:00'); path=./";
// console.log(setCookie);

// reading all the cookies
const readCookies = document.cookie;
console.log(readCookies);


// deleting a cookie
document.cookie = "Client-Name=; expires=new Date('September 7, 2022, 10:00:00'); patha=./";


function setCookie(cookieName, cookieValue, expiryDate){
    const day = new Date(); // set up a datetime
    day.setTime(day.getTime() + expiryDate *24*60*60*1000); // to get hours info
    let expiresAfter = "expires=" + day.toUTCString(); //
}

setCookie('UserName', 'Jogn', 'September 11, 2022');
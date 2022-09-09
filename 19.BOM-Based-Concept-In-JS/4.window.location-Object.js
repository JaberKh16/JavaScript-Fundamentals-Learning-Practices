/*
    JavaScript BOM Based Object- window.location Object
    ===================================================
    window.location Object is another BOM based object which is used to get the browser
    current page location information which is nothing but the current page URL information
    and to redirect the to a new page.

    window.location Object Based Properties
    ---------------------------------------
    1) location.href        --> returns the current page url.
    2) location.hostname    --> returns the domain name of web host.
    3) location.pathname    --> returns the file path of the current page.
    4) location.protocol    --> returns the web protocol type.
    5) location.port        --> returns the port no. of the host.
    6) location.origin      --> returns the protocol, hostname and port number of the url as string.
                                this property is read-only. if the port number is not available
                                in the url then returns the default port like 80(http) or 443(https).
                                event url using the 'file' protocol the returns value differs from
                                browser to browser.
    7) location.search      --> returns the querystring part of a url including the question(?)
                                mark as a string. this property is also used to set the querystring
                                through parameter passisng.
    8) location.hash        --> it sets or returns the anchor part of a URL, including the 
                                hash sign (#) as a string. there is a one thing to note when
                                setting the anchor part don't include the hash (#) sign. to
                                set the anchor use the following-  
                                                location.hash = anchorname.
                                anchor part of the url is nothing the part written after #.
                                see the example-
                                    <a href="/js/js_strings.asp#part2">JavaScript Strings</a>
                                here's the anchor part is 'part2'




    window.location Object Based Methods
    ------------------------------------
    1) location.assign(url)    -->  to load a new document specified in the method as url and 
                                    returns 'None'. it doesn't removes the previous document
                                    from the document history.
    2) location.replace(url)   -->  to replace the current document with a new one and returns 
                                    'None'. it takes a url as a parameter and reloads to that 
                                    specified url and delete the previous document url from the 
                                    document history which is the single difference 
                                    with location.assign() method.
    3) location.reload()        --> to reload the current url repeatedly. it doens same as the reload
                                    button in the browser.


*/

// store the window.location Object in some variable
var windowLocationObj = window.location;
console.log(windowLocationObj);

// working with some property of window.location Object
console.log(`window.location.href : ${windowLocationObj.href}`);
console.log(`window.location.hostname : ${windowLocationObj.hostname}`);
console.log(`window.location.pathname : ${windowLocationObj.pathname}`);
console.log(`window.location.protocol : ${windowLocationObj.protocol}`);
console.log(`window.location.port : ${windowLocationObj.port}`);
console.log(`window.location.origin : ${windowLocationObj.origin}`);
// console.log(`window.location.search : ${windowLocationObj.search}`);
// console.log(`window.location.hash : ${windowLocationObj.hash}`);


function settingHashValue(windowLocationObj){
    var urlLink = document.getElementById('url-part');
    urlLink.hash = 'Failure(Song)'; // setting the anchorname
    return urlLink;
}


function gettingHashValue(windowLocationObj){
    settingHashValue(windowLocationObj); // calling the function to set the hash value before getting it
    var urlLink = document.getElementById('url-part');
    document.getElementById('write-hash').innerText = `Anchor portion of the url is: ${urlLink.hash}`; 
}
gettingHashValue(windowLocationObj);

function gettingSearchValue(windowLocationObj){
    var urlLink = document.getElementById('url-part');
    document.getElementById('write-search').innerText = `Querystring portion of the url is: ${urlLink.search}`; 
}
gettingSearchValue(windowLocationObj);


// working with some method of window.location Object
// console.log(`window.location.replace() : ${windowLocationObj.replace('https://www.youtube.com')}`);
// console.log(`window.location.reload() : ${windowLocationObj.reload('https://www.youtube.com')}`);
// console.log(`window.location.assign() : ${windowLocationObj.assign('https://www.youtube.com')}`);
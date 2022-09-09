/*
    JavaScript BOM Based Object - window.navigator Object
    =====================================================
    window.navigator Object is used to get the information about client browser.

    window.navigator Object Based Properties
    ----------------------------------------
    1)  navigator.appName        --> returns the application name of the browser.
    2)  navigator.appCodeName    --> returns the application code name of the browser.
    3)  navigator.appVersion     --> returns the version information about the browser.
    4)  navigator.platform       --> returns the browser platform(OS) information.
    5)  navigator.cookieEnabled  --> returns 'true' if cookies are enabled.
    6)  navigator.product        --> returns the product name of the browser engine.
    7)  navigator.userAgent      --> returns the user-agent header sent by the browser to the server.
    8)  navigator.language       --> returns the browser language.
    9)  navigator.onLine         --> returns 'true' if the browser is online.

    window.navigator Object Based Methods
    -------------------------------------
    1) navigator.javaEnabled()   --> returns 'true' if the browser has Java enabled in its system.

*/

// store the window.navigator Object into a variable
var windowNavigatorObj = window.navigator;
console.log(windowNavigatorObj); // to see the window.navigator Object information

// checking some of the window.navigator Object properties
console.log(`window.navigator.appName : ${windowNavigatorObj.appName}`);
console.log(`window.navigator.appCodeName : ${windowNavigatorObj.appCodeName}`);
console.log(`window.navigator.appVersion : ${windowNavigatorObj.appVersion}`);
console.log(`window.navigator.platform : ${windowNavigatorObj.platform}`);
console.log(`window.navigator.product : ${windowNavigatorObj.product}`);
console.log(`window.navigator.userAgent : ${windowNavigatorObj.userAgent}`);
console.log(`window.navigator.language : ${windowNavigatorObj.language}`);
console.log(`window.navigator.cookieEnabled : ${windowNavigatorObj.cookieEnabled}`);
console.log(`window.navigator.onLine : ${windowNavigatorObj.onLine}`);


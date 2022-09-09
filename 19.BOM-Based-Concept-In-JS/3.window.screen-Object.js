/*
    JavaScript BOM Based Objects - window.screen Object
    ===================================================
    window.screen Object is another BOM based object which is used to get necessary
    information about the client device screen.

    window.screen Object Based Properites
    -------------------------------------
    1) screen.width         --> returns the width of client device in px value.
    2) screen.height        --> returns the height of client device in px value.
    3) screen.availHeight   --> returns the client device available height(calucalted as 
                                height of client screen - interface feature[window tabbar]).
    4) screen.availWidth    --> returns the client device available height(calucalted as 
                                width of client screen - interface feature[window tabbar]).
    5) screen.pixelDepth    --> returns the pixel depth of the screen.
    6) screen.colorDepth    --> returns the no. of bits used to display a single color.

    Note: For modern computers 'colorDepth' and 'pixelDepth' are equal.

*/

// storing window.screen Object in a variable
var windowScreenObj = this.screen;
console.log(windowScreenObj);

// checking some propery value of window.screen Object
console.log(`window.screen.width is : ${windowScreenObj.width}px`);
console.log(`window.screen.height is : ${windowScreenObj.height}px`);
console.log(`window.screen.availWidth is : ${windowScreenObj.availWidth}px`);
console.log(`window.screen.availHeight is : ${windowScreenObj.availHeight}px`);
console.log(`window.screen.pixelDepth is : ${windowScreenObj.pixelDepth}bits`);
console.log(`window.screen.colorDepth is : ${windowScreenObj.colorDepth}bits`);

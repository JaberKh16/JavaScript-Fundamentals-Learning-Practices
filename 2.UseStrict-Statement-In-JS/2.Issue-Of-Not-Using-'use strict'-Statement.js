/*
    'use strict' in Javascript is basically the statement which is used
    to define or mentioning that this script file is following Ecmascript(ES5)
    property/specification provided by the modern browser. It ensures the use 
    of JavaScript file being used all modern basde properites and specification.
    To create the statement use the following:
        'use strict'   or "use strict"
    which means that single quotes or double quotes can be used to declare that.
    
    And this statement can be define anywhere inside the script file, but best 
    practice is to use it on top of any JS Code because whatever JS Code after can
    only consider the ES5 specification.

*/

// First Issue: variable declared before 'use strict' doesn't follow modern ES5 JS Specification

var browserName = "Chrome";
let versionInfo = "21.26.1";

'use strict'

/*  Seconf Issue: whatever variable declared after the 'use strict', if didnt use declaring variable 
    of it using either old way 'var' or using 'let' while creating variables then it will through
    an error "ReferenceError". If 'use strict' not declard before then browser will allow it to work 
    normally as a variable.
*/
anotherBrowserName = "Edge";

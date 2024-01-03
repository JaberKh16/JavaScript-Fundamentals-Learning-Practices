/*
    Passing Specific Dependencies As Parameters
*/

const Dependencies = (function(Jquery, RequireJS){
    var VERSION_Jquery = "4.5.2";
    var VERSION_REQUIREJS = "3.5.2";
    var VERSION_JqueryCDNLINK = "https://github.com/jquery/jquery4.5.2";
    var VERSION_REQUIREJSCDNLINK = "https://github.com/requirejs/requirejs3.5.2";

    const attatchingCDNS = function(){
        this._jqcdn = jQuery.get(this._jqcdn)
        this._requirejscdn = jQuery.get(this._requirejscdn)
    };

    Dependencies.prototype.getLibrary = function(){
        return {
            jqueryLib: { VERSION_Jquery: VERSION_Jquery,  VERSION_JqueryCDNLINK: VERSION_JqueryCDNLINK},
            requireJSLib: { VERSION_REQUIREJS: VERSION_REQUIREJS,  VERSION_REQUIREJSCDNLINK: VERSION_REQUIREJSCDNLINK},
        }
    };

    return Dependencies;

})(Jquery, RequireJS); // dependencies given as arguments

var libsInstance = new Dependencies();
libsInstance.getLibrary();
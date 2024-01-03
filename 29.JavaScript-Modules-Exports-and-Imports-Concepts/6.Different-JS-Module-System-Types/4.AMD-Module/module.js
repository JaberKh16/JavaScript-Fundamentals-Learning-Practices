/**
    Asynchronous Modular System
    ===========================
    Asynchronous Modular System is shorthand for AMD Mode Modular System. It is used when wanted the
    particular code or block to be run in runtime wihtout bloating build in the system.

    Syntax:

        define([
            'require',
            'dependency'
        ], function(require, exports, module) {
                'use strict';
        })


    In [] this need to specify all the dependencies to check on when running.
*/

define(function(){
    text = "Asynchronous Modular System";
    function printText(text){
        console.log(text);
    }
    return {
        printText: printText
    }
});

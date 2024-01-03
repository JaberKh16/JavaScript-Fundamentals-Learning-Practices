(function(root, factory, name){
    // setup environment which support AMD
    if(typeof defie === 'function' && define.amd){
        define([], factory); // define(arrayOfDependancies, factory)
    } // setup environment which supprt in CJS
    else if(typeof module === 'object' && module.exports){ 
        module.exports = factory(); // 
    }else{
        root[name] = factory()[name];
    }
} (globalThis, function(){
    const text = "Universal Mode Modular System";
    function printText(text){
        console.log(text);
    }

    return {
        printText: printText
    }
}), 'printName');
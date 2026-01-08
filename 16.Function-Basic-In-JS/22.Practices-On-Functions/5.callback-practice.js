// Example-1: Load Script
function loadScript(properties, callback){
    let script = document.createElement('script');
    script.type = properties.type;
    script.src = properties.src;

    script.onload = () => callback(script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.body.append(script);
}

const srcPropeties = {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
    type: 'text/javascript'
}
loadScript(srcPropeties, (script) => {
    console.log(`${script.src} is loaded...`)
})
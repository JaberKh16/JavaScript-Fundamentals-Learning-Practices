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


// Example-2: Sum Calculation
function getSalary(salary, tax, callback){
    let netSalary = salary - (salary * tax);
    callback(netSalary);
}

getSalary(5000, 0.1, (netSalary) => {
    console.log(`Net Salary is: ${netSalary}`);
});
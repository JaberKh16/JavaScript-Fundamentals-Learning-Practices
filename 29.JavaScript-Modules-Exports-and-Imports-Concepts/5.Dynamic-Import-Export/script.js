
// though import() function return promises handling with 'await'
const { module1 } = await import('./module-1.js');
const { module2 } = await import('./module-2.js');

console.log(module1.then(result => { console.log(result)}));
console.log(module2.printSpeciesInfo());

// promises way of handling
const promises = Promise.all(
    [ 
        await import('./module-1.js'),
        await import('./module-2.js')
    ]
)

promises.then(res => {
    console.log(res);
})
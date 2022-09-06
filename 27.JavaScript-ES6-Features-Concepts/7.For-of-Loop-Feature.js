// Example-1. ES5 way of dealing with HTMLCollection
const buttonClicked1 = document.getElementById('click-button1');
buttonClicked1.addEventListener('click', function(){
    const listItems = document.getElementsByClassName('list-item1');
    console.log(listItems);
    // converting HTMLCollection to an Array 
    const convertToArrayItems = Array.prototype.slice.call(listItems);
    console.log(convertToArrayItems); 
    convertToArrayItems.forEach(element => {
        element.classList.toggle('list-item_whenclick1');
    });
})

// // Example-2 ES6 way of dealing with HTMLCollection
// Solvance-1
// const buttonClicked2 = document.getElementById('click-button2');
// buttonClicked2.addEventListener('click', function(){
//     const listItems = document.getElementsByClassName('list-item2');
//     console.log(listItems);
//     // converting HTMLCollection to an Array  
//     Array.from(listItems).forEach(element => {
//         element.classList.toggle('list-item_whenclick2');
//     });
// })


// Example-2 ES6 way of dealing with HTMLCollection with For Of Loop
// Solvance-2
const buttonClicked2 = document.getElementById('click-button2');
buttonClicked2.addEventListener('click', function(){
    const listItems = document.getElementsByClassName('list-item2');
    console.log(listItems);
    // converting HTMLCollection to an Array  
    const convertedArray = Array.from(listItems);
    for(let element of convertedArray){
        element.classList.toggle('list-item_whenclick2');
    };
})
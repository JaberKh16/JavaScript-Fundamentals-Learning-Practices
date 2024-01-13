/*
    Factory Function Basic Concept
    ==============================
    Factory Function is basically the design patterns where basically the functions
    which returns an object.

    Syntax:
        function factoryFunc(){
            return {};
        }

    Advantage Of Factory Function
    -----------------------------
        a. Data Hiding/Privacy - cant mutate from outside
        b. DRY Support - Dont repeat code supports
        c. Isolation Environment

*/

// Example-1
const personInfo = function(){
    const personInfo = {
        name: 'RK',
        age: 23,
        getInfo(){
            return this.name + this.age;
        }
    };
    return personInfo;
}

console.log(personInfo());

// trying to update 
personInfo.age = 25;
console.log(personInfo());

// Example-2
function createElement(type, text, color){
    const element = document.createElement(type);
    element.innerText = text;
    element.style.color = color;
    return {
        element,
        // making two methods for setting text and color
        setText(){
            element.innerText = text;
        },
        setColor(){
            element.style.color = color;
        }
    }
}

const element = createElement('div', 'Inside Div', '#aaddee');
element.setText('From the div');
element.setText('#23a43c');
console.log(element);
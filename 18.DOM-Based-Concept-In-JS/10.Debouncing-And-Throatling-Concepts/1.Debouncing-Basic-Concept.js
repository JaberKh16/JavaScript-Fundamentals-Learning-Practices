/*
    Debouncing Basic Concepts 
    =========================
    Debouncing the is the concept of limiting the function calls 
    of certain event on the client side.

    Debouncing is making a function call on the certain time.

    Scanario: 
    1.Let's say user trying to resize the window that normally
      many calls been made on resize events that could cause a
      serious performance issue. So rather calling the events
      of every portion resizing make a certain call at certain
      time on the events.
 
    2. Let's think of search scenario on ecommerce site where users
       write something then give a pause and then write something.So,
       on that case unnecessary making event calls on every keystroke
       make an event call on the pauses between two keystroke on certain
       time.

*/

const getResouce = function () {
    let collectedCoun = 0;
    console.log('Resources collected- ', collectedCount++);
}

const makeBouncing = (callback, delayTimer) =>{
    let timer;
    return function(){
        let context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, delayTimer);
    }
}

const debouncingOccurs = makeBouncing(getResouce, 300);
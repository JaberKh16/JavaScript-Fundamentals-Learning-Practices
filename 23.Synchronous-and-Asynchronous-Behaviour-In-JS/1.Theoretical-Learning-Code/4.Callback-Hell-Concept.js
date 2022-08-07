/*
    Callback Hell Concept
    =====================
    When there has multiple callback function invokation happens
    then that forms a larger nested block which basically reduces
    the coding readability.

    So, basically the Nested Callbacks are called the "Callback Hell".
    
    Syntax-
        callback1(val1, ()=>{ // callback as arrow function 
            callback2(val2, ()=>{ // callback as arrow function
                callback3(val3, function(){ // callback as anonymous function
                    callback4(val4, function funcName()=>{ // callback as named function
                        callback(val5);
                    });
                });
            });
        });
*/

const takingOrder = (customerNo, processingOrderFunc)=>{
    console.log(`Taking order from ${customerNo}`);
    // invoking callback of "processingOrderFunc" function
    processingOrderFunc(customerNo); 
};

const processingOrder = (customerNo, completeOrderFunc)=>{
    console.log(`Processing order of cooking ${customerNo}`);
    setTimeout( function (){
        console.log(`Cooking Completed`);
        console.log(`Orders been processed successfully for ${customerNo}`);
    }, 4000);

    // invoking callback of "completeOrderFunc" function
    completeOrderFunc(customerNo); 
};

const servingOrder1 = function (customerNo, dessertOrderFunc){
    console.log(`Completed order(serving) for ${customerNo}`);
    
    var desertItem = "Ice Cream";
    function extraOrder(desertItem){   
        setTimeout( ()=>{
            console.log('Would like to order dessert..');
            dessertOrderFunc(customerNo, desertItem);
        }, 5000); 
    }
    extraOrder(desertItem);
};


const servingOrder2 = function (customerNo, orderType){
    console.log(`Completed Desert ${orderType} order(serving) for ${customerNo}`);
};

// invoking all the callback functions
takingOrder("customer-1", function (customerNo){ // takes a value and function as parameters
    processingOrder(customerNo, function (customerNo){ // takes a value and function as parameters
        servingOrder1(customerNo, (customerNo)=>{ // takes a single value as parameter
            servingOrder2(customerNo);
        }); 
    });
});
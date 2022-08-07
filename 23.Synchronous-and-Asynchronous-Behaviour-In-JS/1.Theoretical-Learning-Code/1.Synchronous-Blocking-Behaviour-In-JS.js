/*
    Synchronous Blocking Behaviour Concept
    ======================================
    JavaScripts executes the code sequentially(means excutes from top to bottom)
    which happens because JavaScript is a single threaded language.

    Now because of having a single thread, JavaScript sometimes encounters
    a timing issue when trying do some complex calculation or database related
    work(like- searching and getting some data from the database) which generally
    requires more time and if the required data size is very large then it
    requires even more time thus other operations after the data retrieving
    gets stuck because JS use that single thread to perform this database
    operation- this concept in JS is called the Synchronous Blocking Behaviour.    

    Now think of a scenario of Producer/Consumer Problem- 

    a) There are two customers:
        1) Customer-1
        2) Customer-2 
    b) Single cook and waiter:
        1) one Cook
        2) one Waiter(act as single thread)
    
    Now, order take places-
    Scenario-1: "Customer-1" place an order and "Waiter" takes the order and go to the 
                kitchen to revise the order to the "Cook".
                i)  orderPlaced() by Customer-1
                ii) revisedOrder() by Waiter[busy]
                ii) processCooking() by Cook[busy]

    Though the cooking is processing thus Customer-2 needs to wait to order.
    After finishes the processCooking() now the "Cook" gets free and "Waiter"
    took the food and serve the order to "Customer-1".

    And now "Waiter" can  go to the "Customer-2" and take his order and do the 
    same work above.

*/

const processOrder = function (customer){
    console.log(`Processing order for Customer-1`);
    // calculating the current time
    var currentTime = new Date().getTime();
    while(currentTime + 4000 >= new Date().getTime()){

    };
    console.log(`Order processed for Customer-1`);
}

console.log(`Taking order for Customer-1`);
processOrder();
console.log(`Completed order of Customer-1`);

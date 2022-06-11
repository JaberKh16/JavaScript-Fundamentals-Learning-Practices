/*
    Working With Conditional Statement: switch
    Syntax: 
        switch(condition)
        {
            case expression:statement2;
                            statement2;
                            break;
            case expression:statement1;
                            statement2;
                            break;
            default:statement1;
                    statement2;
                    break;
        }
    In Switch Statement, providing 'default' case is optional In JS.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let dayName = prompt("Enter the day name: ");
dayName = String(dayName); // converting the 'dayName' to string type

// Switch Statement 
switch(dayName){
    case 'Monday':  
        alert('Monday');
        break;
    case 'Tuesday': 
        alert('Tuesday');
        break;
    case 'Wednesday':   
        alert('Wednesday');
        break;
    case 'Thursday':
        alert('Thursday');
        break;
    case 'Friday':
        alert('Friday');
    case 'Saturday':
        alert('Saturday');
        break;
    case 'Sunday':
        alert('Sunday');
        break;
    
    default: 
        alert('Invalid Case');
        break;
}
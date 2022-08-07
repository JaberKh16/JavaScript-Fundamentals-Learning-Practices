// Declaring the 'use strict' statement
'use strict'

// Defining a function
function PassGradeOrNot(studentName, scoreValue){
    // declaring the grade score for individual passing
    const passUniversity = 71;
    const passCollege = 51;

    if(scoreValue >= passUniversity){
        console.log(`${studentName} has enrolled in university with a 
        ${scoreValue} points.`);
    }
    else if(scoreValue >= passCollege){
        console.log(`${studentName} has enrolled in college with a 
        ${scoreValue} points.`);
    }
    else{
        console.log(`${studentName} has failed to join any courses.`)
    }
}


// defining another function to calculate the score
function calculateScoreValue(quizScore, assayScore){
    let totalScore = 0; // initally totalScore is 0
    totalScore = Number(quizScore) + Number(assayScore); // adding both of the score value
    return totalScore;
}

// creating necessary variables
let studentName = prompt('Enter the student name: ');
let quizScore = prompt('Enter the quiz score value: ');
let assayScore = prompt('Enter the assay score value: ')

// Calling the function
PassGradeOrNot(studentName, calculateScoreValue(quizScore, assayScore));
// Defining The Statement 'use scrict'
'use strict';

// Defining Necessary Variables
let userScore = 0; // initially user score is 0
let computerScore = 0; // initially computer score is 0

// Getting The HTML Based Elements With DOM
const userScoreSpanElem = document.getElementById('user-score');
const computerScoreSpanElem = document.getElementById('computer-score');
const scoreBoard = document.querySelector('score-board');
const resultBoard = document.querySelector('result-content');

// Getting The Game Choices List Elements With DOM
const rockElement    = document.getElementById('rock');
const paperElement    = document.getElementById('paper');
const scissorElement = document.getElementById('scissor');



// Defining Computer Choices Function Work
function getComputerChoices(){
    // defining list of choice rock, paper and scissor
    const computerChoices = ['rock', 'paper', 'scissor'];
    const randomlyClickedChoice = Math.floor(Math.random()*3);
    return computerChoices[randomlyClickedChoice];
}

// getComputerChoices();

/*

// Defining User Choices Function Work
function getUserChoices(userChoseItem){
    const userChoice = userChoseItem;
    // console.log(userChoice);
    return userChoice;
}

*/

// getUserChoices(userChoseItem);

/*

let userChoseItem = getUserChoices(); // calling the getUserChoices() function to get the user clicked item
let computerChoseItem = getComputerChoices(); // calling the getcomputerrChoices() function to get the computer randomlsy generated item

*/

function convertScoreToWord(scoreLetter){
    if(scoreLetter === 'rock')
        return 'rock';
    if(scoreLetter === 'paper')
        return 'paper';
    else
        return 'scissor';
}

function userWinsCase(userChoseItem, computerChoseItem){
    userScore++; // increasing user score value though user wins
    console.log(`User Wins:${userScore} times`);
    userScoreSpanElem.innerHTML = userScore; // replacing user win case score with its score
    computerScoreSpanElem.innerHTML = computerScore; // replacing computer win case score with its score
    resultBoard.innerHTML =`${convertScoreToWord(userChoseItem)} beats ${convertScoreToWord(computerChoseItem)}`;  
}

function computerWinsCase(userChoseItem, computerChoseItem){
    computerScore++; // increasing user score value though user wins
    console.log(`Computer Wins:${computerScore} times`);
    userScoreSpanElem.innerHTML = userScore; // replacing user win case score with its score
    computerScoreSpanElem.innerHTML = computerScore; // replacing computer win case score with its score
    resultBoard.innerHTML =`${convertScoreToWord(userChoseItem)} beats ${convertScoreToWord(computerChoseItem)}`;
}

function drawCase(drawScore){
    drawScore++; // increasing user score value though user wins
    console.log(`Match Draws:${drawScore} times`);
}

// Defining Game Functionality Function Work
function gameFunctionalityWork(userChoseItem){

    let computerChoseItem = getComputerChoices(); // calling the getcomputerrChoices() function to get the computer randomlsy generated item
    let status;


    // available combination for the game for win or lose
    switch(userChoseItem + '--' + computerChoseItem){
        // cases where user wins
        case "scissor--rock": // if user choice is 'scissor' and computer choice is 'rock'
        case "paper--rock": // if user choice is 'paper' and computer choice is 'rock'
        case "scissor--paper": // if user choice is 'scissor' and computer choice is 'paper'
            // console.log(`User Wins`);
            /*
            status = function(userScore){
                userScore++; // increasing user score value
                console.log(`User Wins: ${userScore} times`);
            };
            status();
            */
            userWinsCase();
            break;
        
        // cases where computer wins
        case "rock--paper": // if user choice is 'rock' and computer choice is 'paper'
        case "scissor--rock": // if user choice is 'scissor' and computer choice is 'rock'
        case "paper--scissor": // if user choice is 'paper' and computer choice is 'scissor'
            // console.log(`Computer Wins`);
            /*
            status = function(computerScore){
                computerScore++; // increasing user score value
                console.log(`User Wins: ${computerScore} times`);
            };
            status();
            */
            computerWinsCase()
            break;
        
        // cases where draw occurs
        case "rock--rock": // if user choice is 'rock' and computer choice is 'rock'
        case "paper--paper": // if user choice is 'paper' and computer choice is 'paper'
        case "scissor--scissor": // if user choice is 'scissor' and computer choice is 'scissor'
            // console.log(`Match Draw`);
            /*
            let drawCase = 0;
            status = function(drawCase){
                drawCase++; // increasing drawcase score value
                console.log(`User Wins: ${drawCase} times`);
            };
            status();
            */
            let drawScore=0;
            drawCase(drawScore);
            break;
    }
}

// Calling The Game Functionaly Function
// gameFunctionalityWork(userChoseItem, computerChoseItem);



// Event Based Works For The Choicess
function mainGameWork(){
    rockElement.addEventListener('click', function(){
        // console.log('Clicked On Rock');
        gameFunctionalityWork('rock');
    })
    
    paperElement.addEventListener('click', function(){
        // console.log('Clicked On Paper');
        gameFunctionalityWork('paper');
    })
    
    scissorElement.addEventListener('click', function(){
        // console.log('Clicked On Scissor');
        gameFunctionalityWork('scissor');
    })
}

// Calling The Main Game Work Function
mainGameWork();

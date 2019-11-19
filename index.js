var inquirer = require("inquirer");
var Word = require("./Word.js");
var wordList = ["eleven", "demogorgon", "hopper", "hawkins", "experiment", "laboratory","russian", "gate", "demodogs", "rats", "eggo"];;
var counter = 0;
var limit = 10;
var wins = 0;
var losses = 0;
var guessedLetters = [];


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

console.log("Word Guess Game - Stranger Things Edition")
console.log("=========================================")
function startup(){
    if (wins > 0 || losses > 0){
        console.log("Games Won: " + wins);
        console.log("Games lost: " + losses + "\n");
    };
    counter = 0;
    guessedLetters = [];
    inquirer
    .prompt([
        {
            type:"list",
            choices: ["Play Game", "Exit"],
            message: "What would you like to do?",
            name: "startOptions"
        }
    ]).then(function(answer){
        if(answer.startOptions == "Play Game"){
            var selectedWord = wordList[getRandom(0, 0)];
            var gameWord = new Word(selectedWord.toLowerCase());
            gameWord.createWord();
            console.log("\n");
            console.log(gameWord.printString());
            standardPrint();
            counter++;
            inputQuestion(gameWord);
        };
    });
};

function inputQuestion(wordGiven){
    if (counter <  limit) {
        var wordCorrect = true;
        wordGiven.wordArray.forEach(element =>{
            if (element.guessed == false){
                wordCorrect = false;
            }
        });
        if (wordCorrect == false){
            inquirer
            .prompt ([
                {
                    type: "input",
                    message: "enter letter",
                    name: "letterInput"
                }
            ]).then(function(answer){
                enteredLetter = answer.letterInput.charAt(0).toLowerCase();
                if (guessedLetters.includes(enteredLetter)){
                    console.log("\n you have already gussed this letter, please try a different letter\n")
                    inputQuestion(wordGiven);
                }
                else{
                    wordGiven.guessCheck(enteredLetter);
                    guessedLetters.push(enteredLetter);
                    console.log("\n");
                    console.log(wordGiven.printString());
                    standardPrint();
                    inputQuestion(wordGiven);
                    counter++;
                }
            });
        }
        else{
            console.log("You Win!\n");
            wins++;
            startup();
        };
    }
    else{
        console.log("Sorry, no more guess left. You Lose!\n");
        losses++;
        startup();
    }
    
};

function standardPrint() {
    console.log("\n----------------------");
    console.log("Number of guesses Left: " + (limit - counter));
    console.log("\n")
}

startup();
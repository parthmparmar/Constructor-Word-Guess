var Letter = require("./Letter.js")
var arraytest = [];
var displayWord = "";
function Word(inputWord){
    this.wordArray = [];
    this.createWord = function(){
        inputWord.split("").forEach(element => {
        letter = new Letter(element);
        this.wordArray.push(letter);
    });
    };
    this.printString = function(){
        this.wordArray.forEach(element => {
            displayWord = displayWord + element + " ";
        });
        return displayWord
    };
    this.guessCheck = function(guessCharacter){
        this.wordArray.forEach(element => {
            element.check(guessCharacter);
        })
    }
};

// word1 = new Word("cat");
// word1.createWord();
// console.log(word1.wordArray);
// word1.guessCheck("c");
// console.log(word1.printString());

module.exports = Word;
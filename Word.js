var Letter = require("./Letter.js")


function Word(inputWord){
    this.word = inputWord;
    this.wordArray = [];
    this.createWord = function(){
        inputWord.split("").forEach(element => {
        letter = new Letter(element);
        letter.space();
        this.wordArray.push(letter);
    });
    };
    this.printString = function(){
        var displayWord = "";
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
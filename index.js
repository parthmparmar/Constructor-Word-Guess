var inquirer = require("inquirer");

var Word = require("./Word.js");

var wordList = ["cat", "dog", "cow"];
var selectedWord = wordList[getRandom(0, wordList.length)];

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var gameWord = new Word(selectedWord);

gameWord.createWord();


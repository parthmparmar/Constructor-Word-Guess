function Letter(character){
    this.character = character;
    this.guessed = false;
};

Letter.prototype.check = function (input){
    if (input == this.character){
        this.guessed = true;
    };
};

Letter.prototype.toString = function(){
    if (this.guessed == true){
        return this.character;
    }
    else{
        return "_";
    };
};

module.exports = Letter;
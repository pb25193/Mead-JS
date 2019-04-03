const Hangman = function(word, attempts = 6){
    this.word = word.toLowerCase().split('');
    this.attempts = attempts;
    this.guessedLetters = [];
};


Hangman.prototype.generator = function(){
    let ans = "";
    this.word.forEach(letter => {
        if(this.guessedLetters.includes(letter) || letter===' ') ans+=letter;
        else ans += "*";
    });
    return ans;
};

Hangman.prototype.guess = function(char){
    char=char.toLowerCase();
    if(this.guessedLetters.includes(char)){
        console.log("this letter is already guessed");
        return;
    }
    if(char.length!=1){
        console.log("please only 1 char");
        return;
    }
    if(!this.attempts){
        console.log("no more attempts left");
        return;
    }
    this.guessedLetters.push(char);
    if(!this.word.includes(char)) this.attempts--;
};

Hangman.prototype.status = function(){
    if(!this.attempts) return "fail";
    let completed = this.word.every((letter)=>{
        return this.guessedLetters.includes(letter) || letter === ' ';
    });
    if(completed) return "complete";
    return "playing";
};

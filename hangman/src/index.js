
import Hangman from './hangman';
import getPuzzle from './requests';


let puzzleDOM = document.querySelector('#puzzle');
let guessesDOM = document.querySelector('#guesses');

let resetButton = document.querySelector('#reset');

const fillPuzzle = (str) => {
    puzzleDOM.innerHTML = '';
    str.split('').forEach((char)=>{
        const letterEl = document.createElement('span');
        letterEl.textContent = char;
        puzzleDOM.appendChild(letterEl);
    });
};

const showGame = () => {
    fillPuzzle(game.generator());
    if(game.status()==='playing') guessesDOM.textContent=`You have only ${game.attempts} guesses left!`;
    if(game.status()==='fail') guessesDOM.textContent=`You loser! the word was ${game.word.join('')}...`;
    if(game.status()==='complete') guessesDOM.textContent=`You won!`;
}

let game;
const num = 3;

const startGame = async (num) => {
    try{
        const puzzle = await getPuzzle(num);
        game = new Hangman(puzzle);
        showGame();
    } catch(e){
        console.log(e);
    }
}


startGame(num);


resetButton.addEventListener('click', ()=>{
    startGame(num);
})

window.addEventListener('keypress', (e)=>{
    game.guess(e.key);
    showGame();
});
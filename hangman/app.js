
let puzzleDOM = document.querySelector('#puzzle');
let guessesDOM = document.querySelector('#guesses');

const showGame = () => {
    puzzleDOM.textContent=game.generator();
    if(game.status()==='playing') guessesDOM.textContent=`You have only ${game.attempts} guesses left!`;
    if(game.status()==='fail') guessesDOM.textContent=`You loser! the word was ${game.word.join('')}...`;
    if(game.status()==='complete') guessesDOM.textContent=`You won!`;
}

let game;

getPuzzle((puzzle)=>{
    game = new Hangman(puzzle);
    showGame();
});


window.addEventListener('keypress', (e)=>{
    game.guess(e.key);
    showGame();
});


// country challenge

// const countryCode = "IN";

// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         //console.log(e.target.responseText);
//         const data = JSON.parse(e.target.responseText);
//         //fetchit
//         const country = data.find((item)=> item.alpha2Code === countryCode);
//         console.log(country.name);
//     } else if(e.target.readyState === 4) {
//         console.log("error is happening");
//     }
// })


// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
// countryRequest.send();

let country;

getCountry('PK', (countryName)=>{
    country = countryName;
    console.log(country);
});

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

getCountry('RO').then((countryName)=>{
    country = countryName;
    console.log(country);
}).catch((e)=>console.log(e));

fetch('//puzzle.mead.io/puzzle', {}).then((response)=>{
    if(response.status === 200){
        return response.json();
    } else {
        throw new Error("not able to fetch puzzle");
    }
}).then((data)=>console.log(data.puzzle)).catch((error)=>{
    console.log(error);
});


const currentCountry = async ()=>{
    const countryCode = await getLocation();
    return getCountry(countryCode);
}

currentCountry().then((countryName)=>console.log(`You, sir, are in ${countryName}! AMIRIGHT!!!!`)).catch((e)=>console.log(e));


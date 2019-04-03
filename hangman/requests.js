
const getPuzzle = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            console.log(e.target.responseText);
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState===4){
            reject("some error occurred");
        }
    });

    request.open('GET', 'http://puzzle.mead.io/puzzle');
    request.send();
});

// above function was a call back in a previous commit. it was morphed into a promise!!


const getCountry = (countryCode) => new Promise ((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            //console.log(e.target.responseText);
            const data = JSON.parse(e.target.responseText);
            //fetchit
            const country = data.find((item)=> item.alpha2Code === countryCode);
            resolve(country.name);
        } else if(e.target.readyState === 4) {
            reject("error is happening");
        }
    })
    
    
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
    countryRequest.send();

});


// above function was a call back in a previous commit. it was morphed into a promise!!

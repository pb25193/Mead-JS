
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            console.log(e.target.responseText);
            const data = JSON.parse(e.target.responseText);
            callback(data.puzzle);
        } else if (e.target.readyState===4){
            console.log("some error occurred");
        }
    });

    request.open('GET', 'http://puzzle.mead.io/puzzle');
    request.send();
};


const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            //console.log(e.target.responseText);
            const data = JSON.parse(e.target.responseText);
            //fetchit
            const country = data.find((item)=> item.alpha2Code === countryCode);
            callback(country.name);
        } else if(e.target.readyState === 4) {
            console.log("error is happening");
        }
    })
    
    
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
    countryRequest.send();

};

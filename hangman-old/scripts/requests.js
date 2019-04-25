
const getPuzzle = async (num) => {
    try {
        const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${num}`);
        const data = await response.json();
        if(data.puzzle){
            return data.puzzle;
        } else {
            throw new Error('not able to get puzzle!');
        }
    } catch(e) {
        throw new Error('not able to get puzzle!');
    }
// this code was written after ommitting an XHR based implementation with promises, and then re ommitted for a async await implementation
};



const getCountry = async (countryCode) => {
    try{
        const response = await fetch('//restcountries.eu/rest/v2/all');
        const data = await response.json();
        const countryObj = await data.find((item)=> item.alpha2Code === countryCode);
        return countryObj.name;
    } catch (e) {
        throw new Error(e);
    }
// this code was written after ommitting an XHR based implementation for promises, and then re ommitted for a async await implementation
};

const getLocation = async () => {
    const response =  await fetch('//ipinfo.io/json?token=676df98b02c89f');
    const data = await response.json();
    return data.country;
// this code was written after ommitting an XHR based implementation for promises, and then re ommitted for a async await implementation
};




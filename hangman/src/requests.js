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


export {getPuzzle as default};
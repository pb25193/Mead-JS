const myPromise = (num) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(typeof num === 'number'){
            resolve(num*2);
        } else {
            reject('this shoulda been a numbah');
        }
    }, 3000);
});

const processData = async () => {
    try{
        let a = await myPromise("n");
        console.log(a);    
        return a;
    } catch(e) {
        console.log(`reporting in da functoon ${e}`);
        return await myPromise(2);
    }
};

console.log(processData());

processData().then((num)=>{
    console.log(num);
}).catch((err)=>{
    console.log(`sorry, something went wrong: ${err}`);
});
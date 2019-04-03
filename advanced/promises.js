const getDataCallback = (callback, num) =>{
    setTimeout(()=>{
        if(typeof num === 'number'){
            callback(undefined, num*2);
        } else {
            callback('datatype must be a number', undefined);
        }
    }, 2000);
};


getDataCallback((err, data)=>{
    if(err){
        console.log(err);
    } else {
        getDataCallback((err, data)=>{
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        }, data);
    }
}, 2);

//Promise 

const myPromise = (num) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(typeof num === 'number'){
            resolve(num*2);
        } else {
            reject('this is my e2 promise rror');
        }
    }, 3000);
});

myPromise(2).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});


/// chaining exercise


myPromise(2).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    return myPromise(data);
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
});
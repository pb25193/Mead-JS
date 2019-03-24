const getTip = (bill) => {
    if(typeof bill === "number"){
        bill*0.25;
    } else {
        throw Error("bill should be integer");
    }
}

try{
    console.log(getTip(true));
} catch(e) {
    console.log("catch block is running with "+e);
}

console.log("gracefully out");
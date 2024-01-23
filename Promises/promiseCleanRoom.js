let pcr = new Promise((resolve, reject) => {
    let isCleanRoom = true;
    if(isCleanRoom){
        resolve("Room is cleaned");
    }
    else{
        reject("Rom is not cleaned");
    }
});

pcr
.then((fromResolved) => {
    console.log(fromResolved);
})
.catch((fromRejected) => {
    console.log(fromRejected);
})
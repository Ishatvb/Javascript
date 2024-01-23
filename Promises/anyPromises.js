let prc1 = new Promise((resolve, reject) => {
    let isRoomClean1 = true;
    if(isRoomClean1){
        resolve("Room1 is cleaned");
    }
    else{
        reject("Room1 is dirty");
    }
});

let prc2 = new Promise((resolve, reject) => {
    let isRoomClean2 = true;
    if(isRoomClean2){
        resolve("Room2 is cleaned");
    }
    else{
        reject("Room2 is dirty");
    }
});

let prc3 = new Promise((resolve, reject) => {
    let isRoomClean3 = false;
    if(isRoomClean3){
        resolve("Room3 is cleaned");
    }
    else{
        reject("Room3 is dirty");
    }
});

Promise.any([prc1, prc2, prc3])
.then((fromResolved) => {
    console.log(fromResolved);
})
.catch((fromRejected) => {
    console.log(fromRejected);
})
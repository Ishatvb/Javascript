let pcr = function(){
    return new Promise((resolve , reject) => {
        let isRoomClean = true;
        if(isRoomClean){
            resolve("Room is cleaned");
        }
        else{
            reject("Room is dirty");
        }

    });
};

pcr()
.then((fromResolved) => {
    console.log(fromResolved);
})
.catch((fromRejected) => {
    console.log(fromRejected);
})


let cleanKitchen = function(){
    return new Promise((resolve, reject) => {
    isKitchenClean = false;
    if(isKitchenClean){
        resolve('kitchen is cleaned');
    }
    else{
        reject('kitchen is dirty');
    }
});
}

let grabIceCream  = function(message){
    return new Promise((resolve, reject) => {
    resolve(message + ' Grab the Ice Cream.');
});
}

cleanKitchen()
.then((result) => {
    return grabIceCream(result);
})
.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(result + " Didnt get the icecream")
})
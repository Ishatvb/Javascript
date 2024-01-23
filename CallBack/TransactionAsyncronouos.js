

function transact(title, callback){
    let err;
    let random = Math.floor(Math.random()*100);

    if(title.toUpperCase() != title){
        err = new Error("Not in block letters");
    }
    setTimeout(function(){
        callback(err);
    }, random);    
}

transact("DEALER", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("DEALER has done the transaction");
    }
});


transact("RETAILER", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("RETAILER has done the transaction");
    }
});

transact("CUSTOMER", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("CUSTOMER has done the transaction");
    }
});

transact("CUstomer", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("CUstomer has done the transaction");
    }
});

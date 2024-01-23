let transact = function (title) {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 100);
        let err;

        if (title.toUpperCase() !== title) {
            reject(new Error("Not in Uppercase"));
        } else {
            setTimeout(() => {
                console.log(`${title} Transaction Successful`);
                resolve();
            }, rand);
        }
    });
};

transact("DEALER")
    .then((result) => {
        
        return transact("RETAILER");
    })
    .then((result) => {
       
        return transact("CUSTOMER"); // Ensure to return the promise here
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });

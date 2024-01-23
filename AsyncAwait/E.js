let transact = function (title) {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 100);

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

const executeTransactions = async () => {
    try {
        await transact("DEALER");
        await transact("RETAILER");
        await transact("CUSTOMER");
    } catch (error) {
        console.log(error.message);
    }
};

executeTransactions();

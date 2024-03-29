let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    Holder : ["cone","cup","stick"],
    Toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else{
            reject(console.log('Our Shop is closed'));
        }
    });

}

order(2000, () => {console.log(`${stocks.Fruits[0]} is selected.`)})

.then(() => {
    return order(0, () => {
        console.log("Production started.");
    })
})
.then(() => {
    return order(2000, () => {
        console.log("Fruit chopped.");
    })
})
.then(() => {
    return order(1000, () => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);
    })
})
.then(() => {
    return order(1000, () => {
        console.log("Machine Started.");
    })
})
.then(() => {
    return order(2000, () => {
        console.log(`${stocks.Holder[0]} is selected.`);
    })
})
.then(() => {
    return order(3000, () => {
        console.log(`${stocks.Toppings[1]} is added to ice cream.`);
    })
})
.then(() => {
    return order(2000, () => {
        console.log("Ice cream served.");
    })
})
.catch(() => {
    console.log("Customer Left");
})
.finally(() => {
    console.log("Have a great day!")
})

//  Example of callback hell , and solution of call back hell is promises...
// call backs makes relationships and debuging is hell here ... thats why callback hell

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    Holder : ["cone","cup","stick"],
    Toppings : ["chocolate", "peanuts"]
};

let order = (Fruit_name, Holder_name, Toppings_selected, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} fruit is selected.`);
        callProduction();

        setTimeout(() => {
            console.log("Fruit is chopped.");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added.`);
                setTimeout(() => {
                    console.log("Machine started.");
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.Holder[Holder_name]}.`);
                        setTimeout(() => {
                            console.log(`${stocks.Toppings[Toppings_selected]} is added to ice cream.`);
                            setTimeout(() => {
                                console.log("Ice cream is served.")
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000)
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production started.");
    }, 0);
};

order(0, 0, 1, production);



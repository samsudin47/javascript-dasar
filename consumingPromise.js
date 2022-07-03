const stock = {
    coffeBeans: 250,
    water: 1000,
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeBeans >= 20 && stock.water >= 250) {
            resolve("Stock cukup. Bisa membuat kopi");
        } else {
            reject("Stock tidak cukup");
        }
    });
};

const handleSucces = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

checkStock().then(handleSucces, handleFailure);
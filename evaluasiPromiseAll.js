// deklarasi object state
const state = {
    stock: {
        coffeBeans: 250,
        water: 1000,
    },
    isCoffeMachineBusy: false,
};
// pengecekan mesin kopi
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeMachineBusy) {
                resolve("Mesin kopi siap digunakan");
            } else {
                reject("Mesin kopi sedang sibuk");
            }
        }, 1000);
    });
};
// pengecekan stok kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeBeans >= 20 && state.stock.water >= 15) {
                resolve("Stok cukup. Bisa membuat kopi");
            } else {
                reject("Stok tidak cukup");
            }
        }, 2000);
    });
};
// fungsi mencampur kopi dan air, lalu siap di hidangkan
const brewCoffe = () => {
    setTimeout(() => {
        console.log("Proses membuat kopi Anda.....");
    }, 6000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi siap di hidangkan");
        }, 8000);
    });
};
// memasak air
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan Air");
        setTimeout(() => {
            resolve("Air panas sudah siap");
        }, 2500);
    });
};
// menggiling kopi
const grindCoffeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Sedang menggiling kopi");
        setTimeout(() => {
            resolve("Kopi sudah siap di mixx");
        }, 3500);
    });
};

const grindSugarCoffe = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tambahkan gula secukupnya");
        }, 4000);
    });
};
// mereturn kopi
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeBeans(), grindSugarCoffe()];

            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value);
            return brewCoffe();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeMachineBusy = false;
        });
}

makeEspresso();
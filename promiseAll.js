// deklarasi object state
const state = {
    stock: {
        coffeBeans: 250,
        water: 100,
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
                reject("Mesin kopi sedang sibukk");
            }
        }, 1500);
    });
};

// pengecekan stok kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeBeans >= 20 && state.stock.water >= 20) {
                resolve("Stok cukup. Bisa membuat kopi");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 2000);
    });
};

// fungsi mencampur kopi dan air, lalu siap di hidangkan
const brewCoffe = () => {
    console.log("Proses membuat kopi anda.......");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siappp dihidangkan");
        }, 6000);
    });
};

// memasak air
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanasakan air");
        setTimeout(() => {
            resolve("Air panas sudah siapp!");
        }, 4000);
    });
};

// menggiling kopi
const grindCoffeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi");
        setTimeout(() => {
            resolve("Kopi sudah siapp di mixxxx");
        }, 1000);
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
            const promises = [boilWater(), grindCoffeBeans()];

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
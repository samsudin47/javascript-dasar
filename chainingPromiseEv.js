// evaluasi skenario proses pelayanan di cafe
// deklarasi object menyimpan state
const state = {
    stock: {
        coffeBeans: 500,
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
                reject("Maaf, mesin kopi sedang sibukk..");
            }
        }, 2000);
    });
};

// check stok biji kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeBeans >= 20 && state.stock.water >= 20) {
                resolve("Stok cukup, Bisa membuat kopi");
            } else {
                reject("Stok tidak cukupp!!");
            }
        }, 4000);
    });
};
// fungsi mencampur kopi dan air, lalu menghidangkan kedalam gelas
const brewCoffe = () => {
    setTimeout(() => {
        console.log("Proses membuat kopi Anda..........................");
    }, 4500);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap dihidangkan");
        }, 10000);
    });
};

// mengembalikan promise
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
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
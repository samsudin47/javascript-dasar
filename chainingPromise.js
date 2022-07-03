// chaining promise // kode

// kode untuk fungsi check availability
// skeanrio

// bagian deklarasi object menyimpan state
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
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

// bagian check stok biji kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

// fungsi mencampur kopi dan air lalu menghidangkan kedalam gelas
const brewCoffe = () => {
    console.log("Membuatkan kopi Anda....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap");
        }, 2000);
    });
};

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
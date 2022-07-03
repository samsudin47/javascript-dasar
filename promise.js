const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = true;
    if (isCoffeMakerReady) {
        resolve("Kopi berhasil dibuat!!!");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
};

const makeCoffe = () => {
    return new Promise(executorFunction);
};

const coffePromise = makeCoffe();
console.log(coffePromise);
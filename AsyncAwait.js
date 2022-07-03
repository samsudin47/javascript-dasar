const getCoffe = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    });
};

// kode asyn-await
// function makeCoffe() {
//     getCoffe().then((coffe) => {
//         console.log(coffe);
//     });
// }

// kode asyncronous layaknya syncronous
async function makeCoffe() {
    const coffe = await getCoffe();
    console.log(coffe);
}
makeCoffe();
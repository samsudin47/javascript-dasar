const orderCofe = (callback) => {
    let coffe = null;
    setTimeout(() => {
        console.log("Sedang membuat kopi, silahkan tunggu.....");
    }, 3000);
    setTimeout(() => {
        coffe = "Kopi sudah jadi!";
        callback(coffe);
    }, 5000);
};

orderCofe((coffe) => {
    console.log(coffe);
});

const orderRoti = (callback) => {
    let roti = null;
    setTimeout(() => {
        console.log("Roti sedang di masak, silahkan ditunggu");
    });
    setTimeout(() => {
        roti = "Roti siap diantar";
        callback(roti);
    }, 9000);
};
orderRoti((roti) => {
    console.log(roti);
});
// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// Throwing Errors
// let json = '{"name": "Yoda", "age": 20}';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// Throw

// let json = '{"name":"Yoda" ,"age": 20}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required");
//     }

//     errorCode;

//     console.log(user.name); // undefined
//     console.log(user.age); // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

// menampilkan pesan error sesuai error yang muncul

// let json = '{"age": 30}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required");
//     }

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }

// mengecek validasi data dari json

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{"age": 40}';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
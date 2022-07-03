class ValidationError extends Error {
    constructor(message) {
        this.name = "ValidationError";
    }
}

function validateNumberInput(a, b, c) {
    if (typeof a !== "number") {
        throw ValidationError("Argumen pertama harus number");
    } else if (typeof b !== "number") {
        throw ValidationError("Argumen kedua harus number");
    } else if (typeof c !== "number") {
        throw ValidationError("Argumen ketiga harus number");
    }
}

const detecTriangle = (a, b, c) => {
    try {
        validateNumberInput(a, b, c);
    } catch (error) {
        if (error instanceof ValidationError) {
            return error.message;
        }
    }
    if (a == b && b == c) {
        return "Segitiga sama sisi";
    }
    if (a == b || a == c || b == c) {
        return "Segitiga sama kaki";
    }
    return "Segitiga sembarang";
};
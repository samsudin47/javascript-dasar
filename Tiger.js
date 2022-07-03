class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        return "grrrrrrr";
    }
}

module.export = Tiger;
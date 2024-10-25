class Object {

    constructor(name, canBeBroken, bestBrokenBy, image, durability) {
        this.name = name;
        this.canBeBroken = canBeBroken;
        this.bestBrokenBy = bestBrokenBy;
        this.image = image;
        this.durability = durability;
    }

    getName() {
        return this.name;
    }

    canBeBroken() {
        return this.canBeBroken;
    }

};

module.exports = Object;
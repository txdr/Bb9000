class Item {

    constructor(name, durability, image) {
        this.name = name;
        this.durability = durability;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    getDurability() {
        return this.durability;
    }

    getImage() {
        return this.image;
    }

    whenUsed(player) {
        
    }

};

module.exports = Item;
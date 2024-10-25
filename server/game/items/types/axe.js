const Item = require("../item.js");

class Axe extends Item {

    constructor() {
        super("Axe", 1000, "TO DO");
    }

    whenUsed(player) {
        
    }
    
};

module.exports = Axe;
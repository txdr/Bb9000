const JSONDb = require("simple-json-db");

class Map { // 32x32 nodes


    
    constructor() {
        const mapStorage = new JSONDb("./storage/map.json");
    }

    sync() {

    }

};

module.exports = Map;
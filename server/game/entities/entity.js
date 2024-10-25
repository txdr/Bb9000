class Entity {

    static TYPE_PLAYER = 0;
    static TYPE_ANIMAL = 1;
    static TYPE_MONSTER = 2;

    constructor(radius, color, name, x, y, type) {
        this.radius = radius;
        this.color = color;
        this.name = name;
        this.x = x;
        this.y = y;
        this.looking = -1;
        this.equipped = null;
        this.stroke = true;
        this.type = type;
    }
    
    setStroke(stroke) {
        this.stroke = stroke;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    getName() {
        return this.name;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
    
    setLooking(where) {
        this.looking = where;
    }

    setEquipped(item) {
        this.equipped = item;
    }

    pack() {
        let equip;
        if (this.equipped !== null) {
            
        } else {
            equip = this.equipped;
        }
        return {
            name: this.name,
            color: this.color,
            radius: this.radius,
            stroke: this.stroke,
            equipped: equip,
            looking: this.looking,
            x: this.x,
            y: this.y,
            type: this.type
        };
    }

};

module.exports = Entity;
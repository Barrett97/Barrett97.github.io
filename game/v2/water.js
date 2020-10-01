class Water {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }

    get type() {
        return "water";
    }

    static create(pos, ch) {
        if (ch == "=") {
            return new Water(pos, new Vec(2, 0));
        } else if (ch == "|") {
            return new Water(pos, new Vec(0, 2));
        } else if (ch == "v") {
            return new Water(pos, new Vec(0, 3), pos);
        }
    }
}

Water.prototype.size = new Vec(1,1);
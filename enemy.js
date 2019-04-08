class Enemy extends Ball {
    static colour = "#ff0000";
    damage = 10;
    health = 20;

    constructor() {
        super();
        this.vel = Vector.fromAngle(Math.random() * 2 * Math.PI);
        this.size = 20;
    }
}

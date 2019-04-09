class Enemy extends Ball {
    static colour = "#ff0000";
    static id = 0;
    damage = 10;
    health = 20;
    momentum = new Vector(0, 0);

    constructor() {
        super();
        this.vel = Vector.fromAngle(Math.random() * 2 * Math.PI);
        this.id = Enemy.id++;
    }

    getMomentum() {
        this.momentum.x = this.mass * this.vel.x;
        this.momentum.y = this.mass * this.vel.y;
        return this.momentum;
    }
}

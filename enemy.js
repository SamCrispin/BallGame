class Enemy extends Ball {
    static colour = "#ff0000";
    static id = 0;
    damage = 10;
    health = 20;

    constructor() {
        super();
        this.vel = Vector.fromAngle(Math.random() * 2 * Math.PI);
        this.size = 20;
        this.id = Enemy.id++;
    }
}

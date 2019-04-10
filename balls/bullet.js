class Bullet extends Ball {
    static colour = "#0000ff";
    static id = 0;
    velLimit = 15;
    
    constructor() {
        super(player.pos.x+5, player.pos.y+5);
        this.size = 5;
        this.id = Bullet.id++;
    }

    detectCollisions = function() {
        if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > CANVAS_SIZE || this.pos.y > CANVAS_SIZE) {
            bullets.splice(this.id, 1);
            for (var i = this.id; i < bullets.length; i++) {
                bullets[i].id--;
            }
            Bullet.id--;
        }
    }
}

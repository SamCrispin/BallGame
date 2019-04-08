class Player extends Ball {
    size = 10;
    colour = "#00ff00";
    damage = 10;
    health = 100;

    shoot = function() {
        var bullet = new Ball(this.pos.x, this.pos.y);
        bullet.vel = new Vector(this.vel.x, this.vel.y);
        bullets.push(bullet);
    }
}

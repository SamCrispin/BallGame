class Player extends Ball {
    size = 10;
    colour = "#00ff00";
    damage = 10;
    health = 100;
    velLimit = 5;

    shoot = function() {
        var bullet = new Bullet();
        bullet.vel.x = this.vel.x;
        bullet.vel.y = this.vel.y;
        var direction = this.pos.getAngle(mouseX, mouseY),
            directionVec = Vector.fromAngle(direction);
        directionVec.scale(10);
        bullet.vel.add(directionVec);
        console.log(`x: ${bullet.vel.x}, y: ${bullet.vel.y} mag: ${bullet.vel.getMagnitude()}`);
        bullets.push(bullet);
    }
}

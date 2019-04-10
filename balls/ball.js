class Ball {
    pos = new Vector();
    vel = new Vector(0, 0);
    acc = new Vector(0, 0);
   
    constructor(x, y) {
        this.pos.x = (x) ? x : Math.random() * CANVAS_SIZE;
        this.pos.y = (y) ? y : Math.random() * CANVAS_SIZE;
    }

    move = function() {
        if (this.acc.getMagnitude() > 0) this.vel.add(this.acc);
        this.vel.limit(this.velLimit);
        this.pos.add(this.vel);

        this.detectCollisions();
    };

    detectCollisions = function() {
        if (this.pos.x < 0) {
            this.vel.x *= -1;
            this.pos.x = 0;
        }
        else if (this.pos.x+(this.size*2) > CANVAS_SIZE) {
            this.vel.x *= -1;
            this.pos.x = CANVAS_SIZE - (this.size*2);
        };
        if (this.pos.y < 0) {
            this.vel.y *= -1;
            this.pos.y = 0;
        }
        else if (this.pos.y+(this.size*2) > CANVAS_SIZE) {
            this.vel.y *= -1;
            this.pos.y = CANVAS_SIZE - (this.size*2);
        };
    };
};

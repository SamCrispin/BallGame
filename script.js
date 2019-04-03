var KEYS = {
    "LEFT": 37,
    "UP":   38,
    "RIGHT":39,
    "DOWN": 40
}

var ball = {
    xVel: 0,
    yVel: 0,
    xAcc: 0,
    yAcc: 0,
    x: 100,
    y: 100,

    move: function() {
        this.xVel = (this.xVel + this.xAcc).limitMag(VEL_LIMIT);
        this.yVel = (this.yVel + this.yAcc).limitMag(VEL_LIMIT);

        this.x += this.xVel;
        this.y += this.yVel;

        console.log("xVel: " + this.xVel + ", x:" + this.x);
        console.log("yVel: " + this.yVel + ", y:" + this.y);

        this.detectCollisions();
    }

    detectCollisions: function() {
        
    }
},  
    keys = [],
    ACC = 1,
    VEL_LIMIT = 5;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    keyHandler();
    ball.move();
    circle(ball.x, ball.y, 10);
}

function keyPressed() {
    if (keyCode >= 37 && keyCode <= 40) keys.push(keyCode);
}

function keyReleased() {
    if (keyCode >= 37 && keyCode <= 40) keys.splice(keys.indexOf(keyCode));
}

function keyHandler() {
    ball.xAcc = 0;
    ball.yAcc = 0;
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == KEYS.LEFT) ball.xAcc = -ACC;
        if (keys[i] == KEYS.RIGHT) ball.xAcc = ACC;
        if (keys[i] == KEYS.UP) ball.yAcc = -ACC;
        if (keys[i] == KEYS.DOWN) ball.yAcc = ACC;
    }
}

Number.prototype.limitMag = function(limit) {
    if (this.valueOf() > limit) return limit;
    else if (this.valueOf() < -limit) return -limit;
    else return this.valueOf();
}

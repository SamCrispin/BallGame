var CANVAS_SIZE = 700,
    ACC = 0.5,
    X_ACC = new Vector(ACC, 0),
    Y_ACC = new Vector(0, ACC),
	player = new Player(CANVAS_SIZE/2, CANVAS_SIZE/2),
    enemies = [];
    bullets = []
	keys = [],
    enemyHitboxes = [];

var KEYS = {
    "LEFT": 37,
    "UP":   38,
    "RIGHT":39,
    "DOWN": 40
}

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    enemies.push(new Enemy());
    enemies.push(new Enemy());
    enemies.push(new Enemy());
}   

function draw() {
    background(0);
    keyHandler();
    moveBalls();
    drawPlayer();
    drawEnemies();
    drawBullets();
}

function moveBalls() {
    player.move();
    for (var i = 0; i < enemies.length; i++) enemies[i].move();
    for (var i = 0; i < bullets.length; i++) bullets[i].move();
}

function drawPlayer() {
    fill(player.colour);
    circle(player.pos.x+player.size, player.pos.y+player.size, player.size);
}

function drawEnemies() {
    fill(Enemy.colour);
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i]) ;circle(enemies[i].pos.x+enemies[i].size, enemies[i].pos.y+enemies[i].size, enemies[i].size);
    }
}

function drawBullets() {
    fill(Bullet.colour);
    for (var i = 0; i < bullets.length; i++) {
        if (bullets[i]) circle(bullets[i].pos.x+bullets[i].size, bullets[i].pos.y+bullets[i].size, bullets[i].size)
    }
}

function keyPressed() {
    if (keyCode >= 37 && keyCode <= 40) keys.push(keyCode);
    else if (keyCode == 32) player.shoot();
}

function keyReleased() {
    if (keyCode >= 37 && keyCode <= 40) keys.splice(keys.indexOf(keyCode));
}

function keyHandler() {
    player.acc.scale(0);
    if (keys.length == 0 && player.vel.getMagnitude() != 0) {
        player.acc = player.vel.getMult(-1).getLimit(ACC/2);
    }
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == KEYS.LEFT) player.acc.sub(X_ACC);
        if (keys[i] == KEYS.RIGHT) player.acc.add(X_ACC);
        if (keys[i] == KEYS.UP) player.acc.sub(Y_ACC);
        if (keys[i] == KEYS.DOWN) player.acc.add(Y_ACC);
    }
}

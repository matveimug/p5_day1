
let screenW, screenH;
screenW = window.innerWidth;
screenH = window.innerHeight;
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    // setup()
};
let rotation = 0;
let rotation2 = 0;
let speed = 10;
let levels = 15;
let count = 0;

function setup() {
    background('white');
    createCanvas(screenW, screenH);
    angleMode(DEGREES);
    // noLoop();
    // frameRate(2);
}

function draw() {
    // scale();
    translate(screenW / 2, screenH / 2);
    rotate(rotation2);
    // clear();
    rotation2 = rotation2 - speed/50;
    drawCircle(screenW / 2, 200, levels);
}

function drawCircle(x, radius, level) {
    count++;
    rotation = rotation + speed/100;
    rotate(rotation);
    translate(radius/2, 0);
    if (level % 2 == 0) {
        fill('yellow');
    } else {
        fill('white');
    }
    ellipse(0, 0, radius , radius);
    // text(level, 0, 0);
    if (level > 0) {
        level = level - 1;
        drawCircle(x, radius / 1.2, level);
    }
}

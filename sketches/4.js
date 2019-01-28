
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
let levels = 6;
let count = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

function setup() {
    createCanvas(screenW, screenH);
    angleMode(DEGREES);
    // noLoop();
    // frameRate(2);
}

function draw() {

    // scale();
    translate(screenW / 2, screenH / 2);
    rotate(rotation2);
    rotation2 = rotation2 - speed/50;
    // background('rgba(0,0,0,0.01)');
    drawCircle(screenW / 2, (screenH+screenW)/30, levels);
}

function drawCircle(x, radius, level) {
    count++;
    rotation = rotation + speed/100;
    rotate(rotation);
    if (level !== levels) {
        translate(radius * scale((mouseX+mouseY),0,(screenW+screenH),1,6), 0);
        ellipse(0, 0, radius , radius);
    }
    // text(level, 0, 0);
    if (level > 0) {
        level = level - 1;
        drawCircle(x, radius / 1.5, level);
    }
}

let screenW, screenH;
screenW = window.innerWidth;
screenH = window.innerHeight;
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    // setup()
};

function setup() {
    createCanvas(screenW, screenH);
    rectMode(CENTER);
    // noLoop();
}

let divH = screenH / 10;
let divW = screenW / 10;

const lineLength = 100;

let arr = [];
function populatr(count) {
    for (let i = 1; i <= count; i++) {
        arr.push(Math.random());
    }
}
populatr(screenH / lineLength + 1);
populatr(screenW / lineLength);

function drawLine(i, j) {
    let n = i * lineLength;
    push();
    strokeWeight(20);
    let deg = (mouseX + mouseY) / 2;
    let rad = -PI/4 + radians(deg) + (1 - i) + (1 - j) + arr[i];
    let r = rad;
    let hue = Math.round(deg * 2 / (screenH + screenW) * i * 10 + j * 10);
    translate(n, lineLength);
    rotate(r);
    stroke('hsl('+ hue +',100%,50%)');
    line(0, 0, lineLength, 0);
    noStroke();
    textSize(20);
    text(degrees(r).toFixed(2),0,0);
    pop();
}

function draw() {
    clear();
    // const context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);
    const grid = 20;
    push();
    stroke('rgba(0,0,255,.1)');
    strokeWeight(1);
    for (let i = 1; i <= divH; i++) {
        line(0, i * grid, screenW, i * grid);
    }
    for (let i = 1; i <= divW; i++) {
        line(i * grid, 0, i * grid, screenH);
    }
    pop();
    for (let j = 1; j <= screenH / lineLength + 1; j++) {
        for (let i = 1; i <= screenW / lineLength; i++) {
            drawLine(i, j);
        }
        let n = j * lineLength;
        // line(0,0,screenW,0)
        // text(n,0,0);
        translate(0, lineLength);
    }
}
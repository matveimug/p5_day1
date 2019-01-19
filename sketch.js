

let screenW, screenH;
screenW = window.innerWidth;
screenH = window.innerHeight;
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    setup()
};
let d = 0;
let x, y, nx, ny;

window.onmousemove = function(){
    d = random(20, 200);
    nx = random(-200, 200)
    ny = random(-200, 200)
};

function setup() {
    createCanvas(screenW, screenH);
}

function draw() {

    strokeWeight(3);
    if (mouseIsPressed) {
        fill(0);
        stroke(255);
        x = mouseX + nx;
        y = mouseY + ny;
    } else {
        fill(255);
        stroke(0);
        x = mouseX;
        y = mouseY;
    }
    ellipse(x, y, d, d);
    ellipse(screenW - x, screenH - y, d, d);
    ellipse(x, screenH - y, d, d);
    ellipse(screenW - x, y, d, d);
}
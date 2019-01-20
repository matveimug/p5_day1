let screenW, screenH;
screenW = window.innerWidth;
screenH = window.innerHeight;
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    // setup()
};


window.onmousemove = function(){

};

function setup() {
    createCanvas(screenW, screenH);

}

let divH = screenH / 10;
let divW = screenW / 10;

function draw() {
    clear();
    // const context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);
    const grid = 20;

    stroke('rgba(0,0,255,.1)');
    strokeWeight(1);
    for (let i = 1; i <= divH; i++) {
        line(0, i * grid, screenW, i * grid);
    }
    for (let i = 1; i <= divW; i++) {
        line(i * grid, 0, i * grid, screenH);
    }
    stroke('rgb(0,0,255)');
    strokeWeight(4);
    let x1 = 100;
    let y1 = 1 * x1;
    let x2 = x1;
    let y2 = 2 * x2;
    for (let i = 1; i <= screenW / x1; i++) {
        line(i * x1, y1, i * x2, y2);
        rotate(mouseX);
    }
}
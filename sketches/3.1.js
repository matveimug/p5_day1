
let screenW, screenH;
screenW = window.innerWidth;
screenH = window.innerHeight;
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    // setup()
};

let bugs = []; // array of Jitter objects

function setup() {
    createCanvas(screenW, screenH);
    // Create objects
    for (let i = 0; i < 200; i++) {
        bugs.push(new Jotter());
        bugs.push(new Jitter());
    }
}

function draw() {
    background('white');
    for (let i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
    }
}

// Jitter class
class Jitter {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(0, 300);
        this.speed = 1;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        push();
        ellipse(this.x, this.y, this.diameter, this.diameter);
        pop();
    }
}
class Jotter {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(0, 300);
        this.speed = 1;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        push();
        noStroke();
        fill(255,255,0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        pop();
    }
}

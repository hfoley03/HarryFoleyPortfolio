let boids = [];

function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.parent('p5-canvas');
  noStroke();
  fill(255);
  frameRate(30);

  let num = 15;
  for (let i = 0; i < windowWidth/num; i++) 
    {
    for (let j = 0; j < windowHeight/num; j++) 
        {
        boids.push( new Boid(i * num, j * num));
    }
  }
}

function draw() {
  background(0);

  let s = windowHeight / 5 + abs(windowWidth / 2 - mouseX);
  fill(82, 72, 156, 100);
  fill(170, 118, 125, 100);


  //ellipse(mouseX, mouseY, s, s);
  //ellipse(windowWidth - mouseX, windowHeight - mouseY, s, s);

  for (let boid of boids) {
    boid.update();
    boid.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log('Window Width:', windowWidth); // Print canvasWidth to the console
}

class Boid {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.normalPosition = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 10;
    this.maxForce = 1;
    this.damping = 0.65;
  }

  update() {

    let target = createVector(this.normalPosition.x, this.normalPosition.y);

    if( dist(mouseX,mouseY, this.normalPosition.x, this.normalPosition.y) < 100){
        let targetMouse = createVector(mouseX, mouseY);
        let forceMouse = this.seek(targetMouse, 0.5);
        this.applyForce(forceMouse);
    } else {
        let forceReturn = this.seek(target, 0.2);
        this.applyForce(forceReturn);
    }



    this.velocity.mult(this.damping);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

  }

  seek(target, maxForce) {
    let desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(maxForce);
    return steer;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  show() {
    fill(170, 118, 125);
    rect(this.position.x, this.position.y, 3, 3);
  }
}

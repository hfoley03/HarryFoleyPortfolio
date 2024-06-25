let boids = [];

function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.parent('p5-canvas');
  noStroke();
  fill(255);
  frameRate(30);

  // Create initial set of boids
  for (let i = 0; i < 250; i++) {
    boids.push(new Boid(random(windowWidth), random(windowHeight)));
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
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 10;
    this.maxForce = 1;
  }

  update() {
    let target1 = createVector(mouseX, mouseY);
    let target2 = createVector(windowWidth - mouseX, windowHeight - mouseY);

    let force1 = this.seek(target1);
    let force2 = this.seek(target2);

    this.applyForce(force1);
    this.applyForce(force2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    return steer;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  show() {
    fill(170, 118, 125);
    rect(this.position.x, this.position.y, 10, 10);
  }
}

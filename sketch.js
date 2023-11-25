function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.position(0, 0); 
  sketch.style('z-index', '-1'); 
  sketch.parent('p5-canvas');
}

function draw() {
  background(22,22, 22); 
  ellipse(mouseX, mouseY, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
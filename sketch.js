function setup() {
  // Create a full-size canvas
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.position(0, 0); 
  sketch.style('z-index', '-1'); // Set z-index to place behind other elements
  sketch.parent('p5-canvas');
}

function draw() {
  background(200,22, 22); 
  ellipse(mouseX, mouseY, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
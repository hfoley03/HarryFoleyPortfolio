function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.position(0, 0); 
  sketch.style('z-index', '-1'); 
  sketch.parent('p5-canvas');
}

function draw() {
  background(0,0, 0); 
  noStroke();
  ellipse(mouseX, mouseY, 200, 200);
  ellipse(windowWidth - mouseX, windowHeight -mouseY, 200, 200);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
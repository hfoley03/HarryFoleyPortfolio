function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  sketch.position(0, 0); 
  sketch.style('z-index', '-1'); 
  sketch.parent('p5-canvas');
}

function draw() {
  let s = 100 + abs(windowWidth/2 - mouseX);
  background(0,0, 0); 
  noStroke();
  ellipse(mouseX, mouseY, s, s);
  ellipse(windowWidth - mouseX, windowHeight -mouseY, s, s);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // console.log('Window Width:', windowWidth); // Print canvasWidth to the console

}


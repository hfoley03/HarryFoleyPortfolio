let canvas;
const canvasContainer = document.getElementById('canvas-container');

function setup() {
  const canvasWidth = canvasContainer.offsetWidth;
  console.log('Canvas Width:', canvasWidth); // Print canvasWidth to the console
  canvas = createCanvas(canvasWidth, 400);
  canvas.parent('canvas-container');
  
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 200, 200); // Example drawing
}

function windowResized() {
  const canvasWidth = canvasContainer.offsetWidth;
  console.log('Canvas Width:', canvasWidth); // Print canvasWidth to the console
  resizeCanvas(canvasWidth, 400);
}
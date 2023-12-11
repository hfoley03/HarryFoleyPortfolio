var myAsciiArt;
var asciiart_width = 120; var asciiart_height = 60;
var myCapture
var gfx;
var ascii_arr;

let osc;


function setup() {
  let sketch = createCanvas(windowWidth, windowHeight); // we need some space...
  sketch.style('z-index', '-1'); 
  sketch.parent('p5-canvas');

  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);
  frameRate(30);
}


function draw() {
  background(0);

  let s = 200 + abs(windowWidth/2 - mouseX);
  noStroke();
  fill(255);


    fill(194, 242, 237,125);
    // fill(255, 255, 255,200);
    ellipse(mouseX, mouseY, s, s);
    ellipse(windowWidth - mouseX, windowHeight -mouseY, s, s);
  

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log('Window Width:', windowWidth); // Print canvasWidth to the console
}




var myAsciiArt;
var asciiart_width = 120; var asciiart_height = 60;
var myCapture
var gfx;
var ascii_arr;

let osc;

function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(320, 240);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
    console.log(
      '[initCaptureDevice] capture ready. Resolution: ' +
      myCapture.width + ' ' + myCapture.height
    );
  } catch(_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}

function setup() {
  let sketch = createCanvas(windowWidth, windowHeight); // we need some space...
  sketch.style('z-index', '-1'); 
  sketch.parent('p5-canvas');
  initCaptureDevice();
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  myAsciiArt = new AsciiArt(this);
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);
  frameRate(30);
}



function draw() {
  background(0);

  let s = 400 + abs(windowWidth/2 - mouseX);
  noStroke();
  fill(255);

  if(myCapture !== null && myCapture !== undefined) { // safety first

    gfx.background(0);
    gfx.image(myCapture, 0, 0, gfx.width, gfx.height);
    gfx.filter(POSTERIZE, 5);
    ascii_arr = myAsciiArt.convert(gfx);
    fill(194, 242, 237,125);
    let ss = 200 + abs(windowWidth/2-mouseX)/2;
    myAsciiArt.typeArray2d(ascii_arr, this, mouseX - ss, mouseY - ss, s,s);
    myAsciiArt.typeArray2d(ascii_arr, this, windowWidth - mouseX - ss, windowHeight - mouseY - ss, s,s);
  }
  else {
    fill(194, 242, 237,125);

      ellipse(mouseX, mouseY, s, s);
      ellipse(windowWidth - mouseX, windowHeight -mouseY, s, s);
  }

}

typeArray2d = function(_arr2d, _dst, _x, _y, _w, _h) {
  if(_arr2d === null) {
    console.log('[typeArray2d] _arr2d === null');
    return;
  }
  if(_arr2d === undefined) {
    console.log('[typeArray2d] _arr2d === undefined');
    return;
  }
  switch(arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        '[typeArray2d] bad number of arguments: ' + arguments.length
      );
      return;
  }

  if(_dst.canvas === null) {
    console.log('[typeArray2d] _dst.canvas === null');
    return;
  }
  if(_dst.canvas === undefined) {
    console.log('[typeArray2d] _dst.canvas === undefined');
    return;
  }
  var temp_ctx2d = _dst.canvas.getContext('2d');
  if(temp_ctx2d === null) {
    console.log('[typeArray2d] _dst canvas 2d context is null');
    return;
  }
  if(temp_ctx2d === undefined) {
    console.log('[typeArray2d] _dst canvas 2d context is undefined');
    return;
  }
  var dist_hor = _w / _arr2d.length;
  var dist_ver = _h / _arr2d[0].length;
  var offset_x = _x + dist_hor * 0.5;
  var offset_y = _y + dist_ver * 0.5;
  for(var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
    for(var temp_x = 0; temp_x < _arr2d.length; temp_x++)
      /*text*/temp_ctx2d.fillText(
        _arr2d[temp_x][temp_y],
        offset_x + temp_x * dist_hor,
        offset_y + temp_y * dist_ver
      );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log('Window Width:', windowWidth); // Print canvasWidth to the console
}
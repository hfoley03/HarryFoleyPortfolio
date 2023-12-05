let canvas = document.getElementById('c2');
let renderer = new c2.Renderer(canvas);

renderer.size(480, 480);
renderer.background('#cccccc');


let rect = new c2.Rect(0, 0, 480, 480);
let rects = rect.split([1,2,3,5,8], 'squarify');

renderer.draw(() => {
  renderer.clear();
  
  let mouse = renderer.mouse;
  let point = new c2.Point(mouse.x, mouse.y);
  for (let rect of rects){
    if(rect.contains(point)) renderer.fill('#ff0000');
    else renderer.fill(false);
    renderer.rect(rect);
  }
});
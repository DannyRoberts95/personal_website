let canvas;

let tileNumber = 10;
let tileSize;
let aor;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  canvas.style("z-index", "-1");
  canvas.style("position: fixed");

  colorMode(HSB, 360, 100, 100, 100);
  strokeCap(ROUND);
  angleMode(DEGREES);

  tileSize = floor(windowWidth / tileNumber);
  tileNumber = windowWidth / tileSize;
}

function draw() {
  background(100);
  randomSeed(1);

  tileSize = width / tileNumber;
  let sWidth = 5;

  for (let x = tileSize; x <= width - tileSize; x += tileSize) {
    for (let y = tileSize; y <= height - tileSize; y += tileSize) {
      let size = tileSize / 4;
      let posX = x;
      let posY = y;
      let angle = atan2(mouseY - posY, mouseX - posX);

      push();
      translate(posX, posY + size);
      rotate(angle);
      let h = map(dist(x, y, mouseX, mouseY), 0, width, 250, 320);
      stroke(75);
      strokeWeight(sWidth);
      line(-0, -0, size, size);
      line(-0, -0, -size, -size);
      pop();
    }
  }
  // noLoop();
}

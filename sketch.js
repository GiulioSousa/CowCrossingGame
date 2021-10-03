function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(roadImage);
  showPlayer();
  showCar();
  moveCar();
  movePlayer();
}

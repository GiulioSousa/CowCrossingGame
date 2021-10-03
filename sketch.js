function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
  soundTrack.setVolume(0.3);
  soundCrash.setVolume(0.5);
  soundPoint.setVolume(0.5);
}

function draw() {
  background(roadImage);
  showPlayer();
  showCar();
  moveCar();
  movePlayer();
  collisionVerify();
  showPoints();
  addScore();
}

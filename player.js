let xPlayer = 100;
let yPlayer = 5;
let playerSpeed = 5;

function showPlayer(){
  image(playerImage, xPlayer, yPlayer, 25, 25)
}

function movePlayer(){
  if (keyIsDown (DOWN_ARROW)) {
    yPlayer += playerSpeed;
  }
  if (keyIsDown (UP_ARROW)) {
    yPlayer -= playerSpeed;
  }
  if (keyIsDown (LEFT_ARROW)) {
    xPlayer -= playerSpeed;
  }
  if (keyIsDown (RIGHT_ARROW)) {
    xPlayer += playerSpeed;
  }
  
}

//Player setup
let xPlayer = 235;
let yPlayer = 5;
let playerSpeed = 5;
let hit = false;
let score = 0;
let goal = 370;

//Add player
function showPlayer(){
  image(playerImage, xPlayer, yPlayer, 25, 25)
}

//Moving player
function movePlayer(){
  if (keyIsDown (DOWN_ARROW)) {
    yPlayer += playerSpeed;    
  }
  if (keyIsDown (UP_ARROW)) {
    if (yPlayer > 5) {
      yPlayer -= playerSpeed;
    }
  }
  if (keyIsDown (LEFT_ARROW)) {
    if(xPlayer > 0) {
      xPlayer -= playerSpeed;
    }
  }
  if (keyIsDown (RIGHT_ARROW)) {
    if(xPlayer < 475) {
      xPlayer += playerSpeed;
    }
  }  
}

//Collision
function collisionVerify() {
  for (let i = 0; i < carImage.length; i++) {
    hit = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xPlayer, yPlayer, 20);
    if (hit) {
      loseScore();
    }
  }
}

//reset player
function start(){
  yPlayer = 5;
}

//Show score
function showPoints (){
  fill(70, 130, 180)
  textSize(30)
  text(score, 460, 393)
}

//Increase score
function addScore(){
  if(yPlayer >= goal) {
    soundPoint.play();
    score++;
    start();
  }
}

//Decrease score
function loseScore(){
  if (score > 0) {
    score--;
    soundCrash.play();
    start();
  }
}

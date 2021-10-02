let roadImage;
let playerImage;
let carImage;
//carro
let xCar = 420;

//Player
let yPlayer = 5;
let xPlayer = 100;

function preload(){
  roadImage = loadImage("Imagens/estrada.png");
  playerImage = loadImage("Imagens/ator-1.png")
  carImage = loadImage("Imagens/carro-1.png")
}

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

function showPlayer(){
  image(playerImage, xPlayer, yPlayer, 25, 25);
}

function showCar(){
  image(carImage, xCar, 96, 50, 40);
}

function moveCar(){
  xCar -= 3;
}

function movePlayer(){
  if (keyIsDown (DOWN_ARROW)) {
    yPlayer += 3;
  }
  if (keyIsDown (UP_ARROW)) {
    yPlayer -=3;
  }
  if (keyIsDown (LEFT_ARROW)) {
    xPlayer -= 3;
  }
  if (keyIsDown (RIGHT_ARROW)) {
    xPlayer +=3;
  }
  
}

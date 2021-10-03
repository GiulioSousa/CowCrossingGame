let roadImage;
let playerImage;
let carImage;

let soundTrack;
let soundCrash;
let soundPoint;

function preload(){
  roadImage = loadImage("Imagens/estrada.png");
  playerImage = loadImage("Imagens/ator-1.png");
  carImage = [loadImage("Imagens/carro-4.png"), loadImage("Imagens/carro-5.png"), loadImage("Imagens/carro-6.png"), loadImage("Imagens/carro-7.png"), loadImage("Imagens/carro-8.png"), loadImage("Imagens/carro-9.png")];
  
  soundTrack = loadSound("sons/trilha.mp3");
  soundCrash = loadSound("sons/colidiu.mp3");
  soundPoint = loadSound("sons/pontos.wav");
}

let carLenght = 50;
let carHeight = 40;

//car1
let xCar = 420;
let yCar = 96;
let carSpeed = 3;

//car2
let xCar2 = 420;
let yCar2 = 150;
let carSpeed2 = 5;

//car3
let xCar3 = 420;
let yCar3 = 210;
let carSpeed3 = 4;

function showCar(){
  image(carImage, xCar, yCar, carLenght, carHeight);
  image(carImage2, xCar2, yCar2, carLenght, carHeight);
  image(carImage3, xCar3, yCar3, carLenght, carHeight);
}

function moveCar(){
  xCar -= carSpeed;
  xCar2 -= carSpeed2;
  xCar3 -= carSpeed3;
  loopCar();
}

function loopCar (){
  if (xCar < -50) {
    xCar = 600;
  }
  
  if (xCar2 < -50) {
    xCar2 = 600;
  }
  
   if (xCar3 < -50) {
    xCar3 = 600;
  }
}

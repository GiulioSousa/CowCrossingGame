//Car setup
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [42, 96, 150, 210, 264, 318];
let carSpeed = [5, 4, 3, 7, 6, 8];
let carWidth = 50;
let carHeight = 40;

//Load cars
function showCar(){
  for (let i = 0; i < carImage.length; i++) {
    image(carImage[i], xCars[i], yCars[i], carWidth, carHeight);
  }
}

//Moving the cars
function moveCar(){
  for(let i = 0; i < carImage.length; i++) {
    xCars[i] -= carSpeed[i];
  }
  loopCar();
}

//Loop
function loopCar (){
  for(let i = 0; i < carImage.length; i++) {
    if (endRoad(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

//Function for validate the loop
function endRoad(xCar) {
  return xCar < -50;
}

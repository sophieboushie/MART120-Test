// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(500, 600);
  //gets a random speed when the it first start
  for (var i = 0; i < 50; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(30);
   }

    createCharacter(200,350);
}

function draw() {
  background(340,134,478);
  stroke(0);
  fill(0);

  // call createBorders function 
  createBorders(10);

  // exit message
  textSize(16);
  text("Goal", width-50,height-50)

  //createCharacter(200,350);
  drawcharacter();
  characterMovment();


  //potential enemy
  fill(665,45,34);
  // draw the shape
  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
shapeXSpeeds[i] = random(4,6);
shapeYSpeeds[i] = random(1,5);



  // move the shape
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
  // check to see if the shape has gone out of bounds
  if(shapeXs[i] > width) {
     shapeXs[i] = 0;
  }
  if(shapeXs[i] < 0) {
     shapeXs[i] = width;
  }
  if(shapeYs[i] > height) {
     shapeYs[i] = 0;
  }
  if(shapeYs[i] < 0) {
     shapeYs[i] = height
  }
}
    //check to see if the charater has left the exit
  if(characterX > width && characterY > width - 50) {
    fill(0);
    stroke(5);
    textSize(26);
    text("Yippie!", width/2-50, height/2-50);
  }
  
  //create the shape based on the mouse click
  fill(220,330,140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovment() {
 //handle the keys 
 if(keyIsDown(w)) {
   characterY -= 10;
 }
 if(keyIsDown(s)) {
   characterY += 10;
 }
 if(keyIsDown(a)) {
   characterX -= 10;
   console.log("movement: " + characterX);
 }
 if(keyIsDown(d)) {
   characterX += 10;
 }
}

function createCharacter(x,y) {
  charaterX = x;
  character = y;
}

function drawcharacter() {
    fill(234, 40,123);
    circle(characterX, characterY, 25)
}

function createBorders(thickness) {
 // top border
 rect(0,0,width,thickness);
 // left border
 rect(0,0,thickness,height);
 // bottom border
 rect(0, height-thickness,width, thickness);
 // right border
 rect(width-thickness,0,thickness,height-50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
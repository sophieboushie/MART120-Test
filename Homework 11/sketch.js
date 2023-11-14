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
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup() 
{
  createCanvas(500, 600);
  //gets a random speed when the it first start
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)
}

function draw() 
{
  background(0,50,78);
  stroke(0);
  fill(0);
  // top border
  rect(0,0,width,10);
  // left border
  rect(0,0,10,height);
  // bottom border
  rect(0, height-10,width, 10);
  // right border
  rect(width-10,0,10,height-50);

  // exit message
  textSize(16);
  text("Exit",width-50,height-50)

  // character
  fill(23,40,123);
  circle(characterX,characterY,25);

  //handle the keys 
  if(keyIsDown(w))
  {
    characterY -= 10;
  }
  if(keyIsDown(s))
  {
    characterY += 10;
  }
  if(keyIsDown(a))
  {
    characterX -= 10;
  }
  if(keyIsDown(d))
  {
    characterX += 10;
  }

  //potential enemy
  fill(136,8,8);
  // draw the shape
  square(shapeX, shapeY, 30);

  // get a random speed when the it first starts
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  shapeX += shapeXSpeed;
  shapeY += shapeXSpeed;
  // check to see if the shape has gone out of bounds
  if(shapeX > width)
  {
    shapeX = 0;
  }
  if(shapeX < 0)
  {
    shapeX = width;
  }
  if(shapeY > height)
  {
    shapeY = 0;
  }
  if(shapeY < 0)
  {
    shapeY = height
  }

  //check to see if the charater has left the exit
  if(characterX > width && characterY > width-50)
  {
    fill(128,0,128);
    stroke(5);
    textSize(26);
    text("Yippie!!!!", width/2-50, height/2-50);
  }
  
  //create the shape based on the mouse click
  fill(120,10,140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterY += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
  */
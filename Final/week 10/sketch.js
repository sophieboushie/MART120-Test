
var headX = 200;
var headY = 30;
var headDirection = 3;

var eyesX = 80;
var eyesY = 200;
var eyesDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;


function setup() {
    createCanvas(300,500);
}
function draw() {  
    background(220);
    
    // head
    fill(120, 10, 0);
    square(headX,headY,250);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
  
    // eyes
    circle(eyesX,eyesY,40)
    circle(eyesX,eyesY,40)
   
    eyesY += eyesDirection;
    if(eyesX <= 30 || eyesY >= 350 )
    {
        eyesDirection *= -1;
    }

    // nose
    triangle(120, 180, 185, 150, 130, 115);
   
    // mouth
    strokeWeight(7)
    point(60, 80);
    point(200, 80);
    line(180, 250, 65, 235);
   

    textSize(32) ;
    text('Sophie Boushie' , 10, 420) ;

    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 8)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Hi",170,500)



}





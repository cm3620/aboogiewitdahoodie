var xPosition = 250;
var yPosition = 250;
var XSpeed = 88;
var YSpeed = 2;
var aboogie





function preload() {
   monkey = loadImage('assets/monkey.png');
   ban = loadImage('assets/ban.png')
   boogie = loadImage('assets/boogie.png')
   aboogie = loadSound ('assets/aboogie.mp3');
}


function setup() {
 
  createCanvas(windowWidth, windowHeight)
background(99)
}

function mouseClicked() {
if(dist(mouseX,mouseY, 900, 500)<=150);
  aboogie.play ();
  
}


function draw() {
  image (monkey, xPosition, yPosition);
  image (ban, xPosition,400)
  image (boogie, 900, 500 )
  xPosition += XSpeed;
  if (windowWidth-xPosition<=225){
    XSpeed = -88;
  }
  if (xPosition<=0){
    XSpeed = 8;
  }
}
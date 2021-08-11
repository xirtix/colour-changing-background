var box
function setup() {
 box=createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyIsDown(LEFT_ARROW)){
  background("green")
}
if(keyIsDown(RIGHT_ARROW)){
  background("red")
}
if(keyIsDown(UP_ARROW)){
  background("blue")
}
if(keyIsDown(DOWN_ARROW)){
  background("white")
}
}





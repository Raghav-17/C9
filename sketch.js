var box 



function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,10,10)
}



function draw() 
{
  background("yellow");
  drawSprites()

  if (keyDown(LEFT_ARROW)) {
     box.x=box.x+-10
  }

  if (keyDown(RIGHT_ARROW)) {
    box.x=box.x+10
 }
}





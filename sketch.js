
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "#b88818";
  box.scale = 1.2;

}

function draw() 
{

  //background(30);

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  

//box.velocityX=+2;
//box.velocityY=-1;


  drawSprites();
}


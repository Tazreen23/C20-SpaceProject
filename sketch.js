var bg;
var sleep,brush,gym;
var eat,drink,move,bath;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload {
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}

function draw() {
  background(255,255,255);  
  drawSprites();
  astrounaunt=createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleep);
  astrounaut.scale=0.1;
  createEdgeSprties(astrounaunt.BounceOff(bg));
  if(keyDown("UP_ARROW")){
    astrounaut.addAnimation("brushing",brush);
    astrounaut.changeAnimation("brushing");
    astrounaut.y=350;
    astrounaut.veloctiyX=0;
    astrounaut.veloctiyY=0;
   if (keyDown("DOWN_ARROW")){
     astronaut.addAnimation("gyming",gym);
     astrounaunt.changeAnimation("gyming");
     astrounaunt.y=350;
     astrounaunt.veloctiyX=0;
     astrounaunt.veloctiyY=0;
   }
   if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astrounaunt.changeAnimation("bathing");
    astrounaunt.y=350;
    astrounaunt.veloctiyX=0;
    astrounaunt.veloctiyY=0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astrounaunt.changeAnimation("eating");
    astrounaunt.y=350;
    astrounaunt.veloctiyX=0;
    astrounaunt.veloctiyY=0;
  }
  if (keyDown("M_BUTTON")){
    astronaut.addAnimation("moving",move);
    astrounaunt.changeAnimation("moving");
    astrounaunt.y=350;
    astrounaunt.veloctiyX=300;
    astrounaunt.veloctiyY=-200;
  }

  
}
  
}
var fixedrect, movingrect; 

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.velocityY=5;
  movingrect=createSprite(400, 800, 50, 50);  
  movingrect.shapeColor="green";
  movingrect.velocityY=-5;
}

function draw() {
  background(0);  

  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
     fixedrect.velocityX=-(fixedrect.velocityX);
     movingrect.velocityX=-(movingrect.velocityX);
   }

   if (movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
     fixedrect.velocityY=-(fixedrect.velocityY);
     movingrect.velocityY=-(movingrect.velocityY);
   }

  drawSprites();
}
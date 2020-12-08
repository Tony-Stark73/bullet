var bullet,wall,speed,weight,dam,thickness,vel;



function setup() {
  createCanvas(1600,400);
  weight=random(30,52);
speed=random(22.3,32.1)
  thickness=random(22,83)
  wall=createSprite(680,200,60,height/2);
  wall.shapeColor=("black")
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor=("red")
  
  bullet.velocityX=speed;



}

function draw() {
background("white")
dam=(0.5*speed*speed*weight)/(thickness*thickness*thickness)
if(wall.x-bullet.x<wall.width/2){
bullet.velocityX=0;

  if(dam>7){
    wall.shapeColor=color("red")
  }
if(dam<7){
  wall.shapeColor=color("green")
}
}


  drawSprites();
}


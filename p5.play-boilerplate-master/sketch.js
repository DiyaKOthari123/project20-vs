
var car
var wall
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(48,62);
  weight=random(400,1450);
  car= createSprite(50, 270, 30, 30);
  wall= createSprite(1500,300,80,height/2);
   wall.shapeColor=("black");
}

function draw() {
  background(210);
  car.velocityX=speed;

 
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100 )
{
car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}

}
  drawSprites();
}
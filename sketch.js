var bullet,wall;
var damageeee;


function setup() {
  createCanvas(1600,400);

  weight = random(30,52);
  speed = random(223,321);

  thickness = random(22,83);

  bullet = new Bullet(weight,speed);
    
  wall = new Wall(thickness);
 
}



function draw() {
background(0,0,0); 
if(bullet.sprite.collide(wall.sprite)){
 bullet.sprite.velocityX = 0;
  deformation();

}
console.log(damageeee);
  drawSprites();
}

function deformation(){
   damageeee =0.5*bullet.weight*bullet.speed*bullet.speed/(wall.thickness*wall.thickness*wall.thickness); 

  if(damageeee>10){
    
    wall.sprite.shapeColor = color(255,0,0);
  }
  if(damageeee<10){
    wall.sprite.shapeColor = color(0,255,0);
  }
  console.log(damageeee);
}


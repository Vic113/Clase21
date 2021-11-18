var caja1;
var caja2;
var caja3;
var caja4;


function setup() {
  createCanvas(800,400);
  caja1 = createSprite(400, 200, 50, 50);
  caja1.shapeColor = ("green")
  caja2 = createSprite(300, 200, 50, 50);
  caja2.shapeColor = ("green")
  caja3 = createSprite(400, 250, 50, 50);
  caja3.shapeColor = ("green")
  caja4 = createSprite(300, 250, 50, 50);
  caja4.shapeColor = ("green")

  caja3.setVelocity(-5,-5)
  caja4.setVelocity(5,-5)

  
}



function draw() {
  background(255,255,255);  

  caja2.x = World.mouseX;
  caja2.y = World.mouseY;

  if(istouching(caja3,caja4) === true) {
    caja3.shapeColor = ("blue");
    caja4.shapeColor = ("blue");
    
  }
  else{
    caja3.shapeColor = ("red")
    caja4.shapeColor = ("red")
  }
 

  bounceoff(caja3, caja4);

  drawSprites();
}



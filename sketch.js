var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,trashCan1,trashCan2,trashCan3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(20,200,30,30);
	ground = new Ground(400,690,800,20);
	trashCan1= new TrashCan(750,590,20,180);
	trashCan2 = new TrashCan(650,670,180,20);
	trashCan3= new TrashCan(550,590,20,180);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  trashCan1.display();
  trashCan2.display();
  trashCan3.display();

  keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-25});
	}
}



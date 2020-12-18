
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dust1,dust2, dust3,dust;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	paper1 = new paper(200,50,30);
	ground1= new Ground(600,height,1200,20);
	dust1=new dustbin(700,370,10,60);
	dust2=new dustbin(900,370,10,60);
	dust3=new dustbin(800,395,210,10);

	
}


function draw() {
 
  background("pink");
  paper1.display();
 
  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  
  Engine.run(engine);

	
}
function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-35});
	}
}




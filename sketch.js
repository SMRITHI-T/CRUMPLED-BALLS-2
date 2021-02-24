
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxImg,box;
var paperImg,paper;
var ground;


function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20);
	box=new Box(700,650);
	paper=new Paper(50,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
 ground.display();
 box.display(); 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



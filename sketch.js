
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxImg,box;
var paperImg,paper;
var ground;


function preload()
{
	boxImg=loadImage("sprites/dustbingreen.png");
	paperImg=loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	box=createSprite(700,650);
	box.addImage(boxImg);
	box.scale=0.5;
	paper=createSprite(50,50,50);
	paper.addImage(paperImg);
	paper.scale=0.5;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20);
	box=new Box(700,650);
	paper=new Paper(50,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 ground.display();
 box.display(); 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



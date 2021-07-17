
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var left,bottom,right;



function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,400,50); 
	ground = new Ground(400,580,800,5);
	left = new Dustbin(600,530,15,100);
	right = new Dustbin(750,530,15,100);
	bottom = new Dustbinbottom(600,430,15,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-285}) 
	}
};	

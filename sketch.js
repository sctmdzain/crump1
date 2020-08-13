const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var g1,g2,g3,g4;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);

	engine = Engine.create();

	world = engine.world;

	g1 = new Ground(500,550,1000,20);
	g2 = new Dustbin(200,350,200,10);
	g3 = new Dustbin(100,305,10,100);
	g4 = new Dustbin(300,305,10,100);
	g5 = new Dustbin(600,500,200,10);
	g6 = new Dustbin(500,480,10,50);
	g7 = new Dustbin(700,480,10,50);

paper = new Paper();



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  g7.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode == LEFT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:-40,y:-40})

	}



if(keyCode == RIGHT_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})

}
}











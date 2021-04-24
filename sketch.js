
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bobweight(400,600,80);
	bob2 = new Bobweight(480,600,80);
	bob3 = new Bobweight(560,600,80);
	bob4 = new Bobweight(640,600,80);
	bob5 = new Bobweight(720,600,80);
	bob6 = new Bobweight(800,600,80);

    rigid = new Support(600,100,800,50);

	rope1 = new Hangingrope(bob1,rigid,bob1.radius*4,0);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rigid.display();
  drawSprites();
 
}




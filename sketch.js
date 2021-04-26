
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
	rigid = new Support(600,100,800,50);
    
	bob1 = new Bobweight(400,600,80);
	bob2 = new Bobweight(480,600,80);
	bob3 = new Bobweight(560,600,80);
	bob4 = new Bobweight(640,600,80);
	bob5 = new Bobweight(720,600,80);
	bob6 = new Bobweight(800,600,80);

	string1 = new Hangingrope(rigid.body,bob1.body,-197,10);
	string2 = new Hangingrope(rigid.body,bob2.body,-117,10);
    string3 = new Hangingrope(rigid.body,bob3.body,-37,10);
	string4 = new Hangingrope(rigid.body,bob4.body,38,10);
	string5 = new Hangingrope(rigid.body,bob5.body,115,10);
	string6 = new Hangingrope(rigid.body,bob6.body,195,10);
    
    
    
    

	
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

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}


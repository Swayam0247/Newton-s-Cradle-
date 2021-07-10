const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,500,40);

	bob1 = new Bob(230,320);
	bob2 = new Bob(310,320);
	bob3 = new Bob(390,320);
	bob4 = new Bob(470,320);
	bob5 = new Bob(550,320);

	rope1 = new Rope(roof.body,bob1.body,0,0)
	rope2 = new Rope(roof.body,bob2.body,-80,0)
	rope3 = new Rope(roof.body,bob3.body,-160,0)
	rope4 = new Rope(roof.body,bob4.body,80,0)
	rope5 = new Rope(roof.body,bob5.body,160,0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white"); 
  roof.display(); 	
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}
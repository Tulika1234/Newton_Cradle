
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

	ground = new Roof(200,200,20,20);


    bob1 = new Bob(700,320,70,70);
    bob2 = new Bob(920,320,70,70);

    bob3 = new Bob(700,240,70,70);
    bob4 = new Bob(920,240,70,70);

    bob5 = new Bob(810,160,70,70);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




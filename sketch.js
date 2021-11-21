
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundobj
var left
var right

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,200,20,ball_options)
	

	World.add(world,ball)

	groundobj = new Ground(width/2,670,width,20)
	left = new Ground(1100, 600,20,120)
	right = new Ground(1200,600,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.show()
  left.show()
  right.show()
  keyPressed()

ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:3,y:-3})
}
	}
	





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var right;
var left;
var ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(windowWidth/2,700,windowWidth,50, ground_options);
  left = new Ground(900,630,10,250, ground_options);
  right = new Ground(1100,630,10,250, ground_options);

  var ball_options = {
    isStatic:false,
    restitution: 0.3,
    friction: 0,
    density:1.2
  };
  var ground_options = {
    isStatic:true,
    restitution: 0,
    friction:1,
  };
  
  ball = Matter.Bodies.circle(220, 100, 20, ball_options);
  World.add(world, ball);
}


function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);
  
  ground.show();
  left.show();
  right.show();
}

function keyPressed() {
 
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:60, y:-100});
  }
 
}
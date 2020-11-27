const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  player1 = new Player(400,200);
  player2 = new Normie(300,200);
}

function draw() {
 background(255,255,255);  
 player1.display();
 player2.display();
 
  drawSprites();
}
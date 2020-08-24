const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1,block;
var rock, sling;
var score; 

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  text("SCORE:"+score,750,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  ground1 = new Ground(550,200,250,20);
  ground2 = new Ground(400,500,100,20);

  //level 1
  block1 = new Block(480,175,30,30);
  block2 = new Block(515,175,30,30);
  block3 = new Block(550,175,30,30);
  block4 = new Block(585,175,30,30);
  block5 = new Block(620,175,30,30);
  //level 2
  block6 = new Block(497.5,145,30,30);
  block7 = new Block(532.5,145,30,30);
  block8 = new Block(567.5,145,30,30);
  block9 = new Block(602.5,145,30,30);
  //level 3
  block10 = new Block(515,115,30,30)
  block11 = new Block(550,115,30,30);
  block12 = new Block(585,115,30,30);
  //level 4
  block13 = new Block(532,85,30,30);
  block14 = new Block(567,85,30,30);
  //level 5
  block15 = new Block(549.5,55,30,30);

sling = new Sling(this.polygon,{x:100, y:200});

}

function draw() {
  background(255,255,255); 
  text(mouseX +","+ mouseY, 1150,50);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();  
  block12.display();

  block13.display();
  block14.display();

  block15.display();
  
  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  sling.fly()
}
async function getBackgroundimg(){ 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>06 && hour<=18){
  bg = "sprites/bg.png"
  }
  else{
  bg = "sprites/bg2.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(responseJSON);
}

